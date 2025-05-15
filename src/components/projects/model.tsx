import * as THREE from "three";
import React, { useEffect, useRef, useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { animated, useSpring } from "@react-spring/three";
import useDimension from "./useDimension";
import useMouse from "./useMouse";
import { useFrame, useThree } from "@react-three/fiber";
import { fragment, vertex } from "./shader";
import { useAspect, useTexture, useVideoTexture } from "@react-three/drei";
import { projects, Project } from "../../../data";

interface ModelProps {
  activeMenu: number | null;
}

interface MaterialUniforms {
  uTexture: THREE.IUniform<THREE.Texture | null>;
  uDelta: THREE.IUniform<{ x: number; y: number }>;
  uOpacity: THREE.IUniform<number>;
}

export default function Model({ activeMenu }: ModelProps) {
  // Use a proper type for the mesh ref - combining THREE.Mesh with ReactThreeFiber types
  const meshRef = useRef<THREE.Mesh>(null);

  // Create a separate ref for the shader material
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const dimension = useDimension();
  const mouse = useMouse();
  const { viewport } = useThree();

  // Extract the image URLs into an array
  const imageUrls: string[] = useMemo(() => 
    projects.map((project: Project) => project.img),
    [] // Empty dependency array ensures this runs only once
  );

  // Call useTexture with the entire array of image URLs
  const textures = useTexture(imageUrls, (textures) => {
    // Optimize textures after loading
    if (Array.isArray(textures)) {
      textures.forEach(texture => {
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
      });
    }
  });

  // Ensure textures are loaded
  const isLoaded = textures.every((texture) => texture && texture.image);

  // Set default values in case textures aren't loaded yet
  const defaultWidth = 100;
  const defaultHeight = 100;

  // Responsive scale based on viewport width
  const getResponsiveScale = useMemo(() => {
    if (dimension.width < 768) {
      return 0.15; // Smaller scale for mobile
    } else if (dimension.width < 1024) {
      return 0.18; // Medium scale for tablets
    } else {
      return 0.225; // Original scale for desktop
    }
  }, [dimension.width]);

  // Always call useAspect, and provide fallback dimensions if textures aren't loaded yet
  const scale = useAspect(
    isLoaded && textures[0].image ? textures[0].image.width : defaultWidth,
    isLoaded && textures[0].image ? textures[0].image.height : defaultHeight,
    getResponsiveScale
  );

  // Smooth mouse position
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const uniforms = useRef<MaterialUniforms>({
    uTexture: { value: isLoaded ? textures[0] : null },
    uDelta: { value: { x: 0, y: 0 } },
    uOpacity: { value: 1 },
  });

  // Memoize texture transition logic
  useEffect(() => {
    if (!isLoaded || !materialRef.current) return;

    const targetTexture = activeMenu !== null ? textures[activeMenu] : null;
    const targetOpacity = activeMenu !== null ? 1 : 0;

    // Using standard animation instead of framer-motion animate
    const startTime = Date.now();
    const duration = 200; // 200ms
    const startOpacity = materialRef.current.uniforms.uOpacity.value;

    const animateOpacity = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;

      if (materialRef.current) {
        materialRef.current.uniforms.uOpacity.value = currentOpacity;
        
        // Update texture only when showing (more performant)
        if (targetTexture && progress === 1 && targetOpacity === 1) {
          materialRef.current.uniforms.uTexture.value = targetTexture;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animateOpacity);
      }
    };

    animateOpacity();
  }, [activeMenu, isLoaded, textures]);

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  // Optimize frame updates
  useFrame(() => {
    if (!isLoaded || !materialRef.current) return;
    
    // Only update uniforms if the delta is significant enough
    const { x, y } = mouse;
    const smoothx = smoothMouse.x.get();
    const smoothy = smoothMouse.y.get();
    
    const newX = lerp(smoothMouse.x.get(), x.get(), 0.05); // Reduced smoothing factor
    const newY = lerp(smoothMouse.y.get(), y.get(), 0.05);
    
    // Only update if there's meaningful change (reduces GPU work)
    if (Math.abs(newX - smoothx) > 0.001 || Math.abs(newY - smoothy) > 0.001) {
      smoothMouse.x.set(newX);
      smoothMouse.y.set(newY);
      materialRef.current.uniforms.uDelta.value = {
        x: x.get() - smoothx,
        y: -1 * (y.get() - smoothy),
      };
    }
  });

  // Adjust transform ranges based on device width for better mobile experience
  const { xRange, yRange } = useMemo(() => {
    const xRange =
      dimension.width < 768
        ? [0, dimension.width, [-viewport.width / 6, viewport.width / 6]]
        : [0, dimension.width, [(-1 * viewport.width) / 3, viewport.width / 3]];

    const yRange =
      dimension.width < 768
        ? [
            0,
            dimension.height,
            [viewport.height / 6, (-1 * viewport.height) / 6],
          ]
        : [
            0,
            dimension.height,
            [viewport.height / 3, (-1 * viewport.height) / 3],
          ];

    return { xRange, yRange };
  }, [dimension.width, dimension.height, viewport.width, viewport.height]);

  // Create React Spring animations for position with optimized settings
  const [springs, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { 
      mass: 1, 
      tension: 210, // Reduced from 280
      friction: 40, // Reduced from 60 for smoother movement 
      precision: 0.005 // Higher precision threshold means less computation
    },
  }));

  // Update spring positions based on mouse movement
  useEffect(() => {
    let frameId: number;
    let lastUpdate = 0;
    
    // Throttled position update to reduce frequent updates
    const updatePosition = () => {
      const now = performance.now();
      
      // Only update every 16ms (approximately 60fps)
      if (now - lastUpdate > 16) {
        const xValue = smoothMouse.x.get();
        const yValue = smoothMouse.y.get();
        
        const inputRangeX = [xRange[0] as number, xRange[1] as number];
        const outputRangeX = xRange[2] as [number, number];
        const normalizedX =
          (xValue - inputRangeX[0]) / (inputRangeX[1] - inputRangeX[0]);
        const posX =
          outputRangeX[0] + normalizedX * (outputRangeX[1] - outputRangeX[0]);

        const inputRangeY = [yRange[0] as number, yRange[1] as number];
        const outputRangeY = yRange[2] as [number, number];
        const normalizedY =
          (yValue - inputRangeY[0]) / (inputRangeY[1] - inputRangeY[0]);
        const posY =
          outputRangeY[0] + normalizedY * (outputRangeY[1] - outputRangeY[0]);

        api.start({ position: [posX, posY, 0] });
        lastUpdate = now;
      }
      
      frameId = requestAnimationFrame(updatePosition);
    };
    
    frameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(frameId);
  }, [smoothMouse.x, smoothMouse.y, xRange, yRange, api]);

  if (!isLoaded) {
    return null; // Optionally render a loader or nothing until textures load
  }

  return (
    <animated.mesh scale={scale} ref={meshRef} position={springs.position}>
      <planeGeometry args={[1, 2, 8, 8]} /> {/* Reduced segments for better performance */}
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{
          uTexture: uniforms.current.uTexture,
          uDelta: uniforms.current.uDelta,
          uOpacity: uniforms.current.uOpacity,
        }}
        transparent
      />
    </animated.mesh>
  );
}
