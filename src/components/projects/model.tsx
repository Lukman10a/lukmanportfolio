import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { animated, useSpring } from "@react-spring/three";
import useDimension from "./useDimension";
import useMouse from "./useMouse";
import { useFrame, useThree } from "@react-three/fiber";
import { fragment, vertex } from "./shader";
import { useAspect, useTexture } from "@react-three/drei";
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
  const imageUrls: string[] = projects.map((project: Project) => project.img);

  // Call useTexture with the entire array of image URLs
  const textures = useTexture(imageUrls);

  // Ensure textures are loaded
  const isLoaded = textures.every((texture) => texture && texture.image);

  // Set default values in case textures aren't loaded yet
  const defaultWidth = 100;
  const defaultHeight = 100;

  // Responsive scale based on viewport width
  const getResponsiveScale = () => {
    if (dimension.width < 768) {
      return 0.15; // Smaller scale for mobile
    } else if (dimension.width < 1024) {
      return 0.18; // Medium scale for tablets
    } else {
      return 0.225; // Original scale for desktop
    }
  };

  const defaultScale = getResponsiveScale();

  // Always call useAspect, and provide fallback dimensions if textures aren't loaded yet
  const scale = useAspect(
    isLoaded && textures[0].image ? textures[0].image.width : defaultWidth,
    isLoaded && textures[0].image ? textures[0].image.height : defaultHeight,
    defaultScale
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

  useEffect(() => {
    if (isLoaded && activeMenu !== null && materialRef.current) {
      // Using standard animation instead of framer-motion animate
      const startTime = Date.now();
      const duration = 2; // 200ms
      const startOpacity = materialRef.current.uniforms.uOpacity.value;
      const targetOpacity = 1;

      const animateOpacity = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity =
          startOpacity + (targetOpacity - startOpacity) * progress;

        if (materialRef.current) {
          materialRef.current.uniforms.uOpacity.value = currentOpacity;
        }

        if (progress < 1) {
          requestAnimationFrame(animateOpacity);
        }
      };

      animateOpacity();
      materialRef.current.uniforms.uTexture.value = textures[activeMenu];
    } else if (isLoaded && materialRef.current) {
      // Animate opacity to 0
      const startTime = Date.now();
      const duration = 2; // 200ms
      const startOpacity = materialRef.current.uniforms.uOpacity.value;
      const targetOpacity = 0;

      const animateOpacity = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity =
          startOpacity + (targetOpacity - startOpacity) * progress;

        if (materialRef.current) {
          materialRef.current.uniforms.uOpacity.value = currentOpacity;
        }

        if (progress < 1) {
          requestAnimationFrame(animateOpacity);
        }
      };

      animateOpacity();
    }
  }, [activeMenu, isLoaded, textures]);

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  useFrame(() => {
    if (isLoaded && materialRef.current) {
      const { x, y } = mouse;
      const smoothx = smoothMouse.x.get();
      const smoothy = smoothMouse.y.get();
      smoothMouse.x.set(lerp(smoothMouse.x.get(), x.get(), 0.1));
      smoothMouse.y.set(lerp(smoothMouse.y.get(), y.get(), 0.1));
      materialRef.current.uniforms.uDelta.value = {
        x: x.get() - smoothx,
        y: -1 * (y.get() - smoothy),
      };
    }
  });

  // Adjust transform ranges based on device width for better mobile experience
  const getTransformRanges = () => {
    const xRange =
      dimension.width < 768
        ? [0, dimension.width, [-viewport.width / 4, viewport.width / 4]]
        : [0, dimension.width, [(-1 * viewport.width) / 2, viewport.width / 2]];

    const yRange =
      dimension.width < 768
        ? [
            0,
            dimension.height,
            [viewport.height / 4, (-1 * viewport.height) / 4],
          ]
        : [
            0,
            dimension.height,
            [viewport.height / 2, (-1 * viewport.height) / 2],
          ];

    return { xRange, yRange };
  };

  const { xRange, yRange } = getTransformRanges();

  // Create React Spring animations for position
  const [springs, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  // Update spring positions based on mouse movement
  React.useEffect(() => {
    const unsubscribeX = smoothMouse.x.onChange((value) => {
      const inputRangeX = [xRange[0] as number, xRange[1] as number];
      const outputRangeX = xRange[2] as [number, number];
      const normalizedX =
        (value - inputRangeX[0]) / (inputRangeX[1] - inputRangeX[0]);
      const posX =
        outputRangeX[0] + normalizedX * (outputRangeX[1] - outputRangeX[0]);

      const unsubscribeY = smoothMouse.y.onChange((value) => {
        const inputRangeY = [yRange[0] as number, yRange[1] as number];
        const outputRangeY = yRange[2] as [number, number];
        const normalizedY =
          (value - inputRangeY[0]) / (inputRangeY[1] - inputRangeY[0]);
        const posY =
          outputRangeY[0] + normalizedY * (outputRangeY[1] - outputRangeY[0]);

        api.start({ position: [posX, posY, 0] });
      });

      return () => unsubscribeY();
    });

    return () => unsubscribeX();
  }, [smoothMouse.x, smoothMouse.y, xRange, yRange, api]);

  if (!isLoaded) {
    return null; // Optionally render a loader or nothing until textures load
  }

  return (
    <animated.mesh scale={scale} ref={meshRef} position={springs.position}>
      <planeGeometry args={[1, 2, 12, 12]} />
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
