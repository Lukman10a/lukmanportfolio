import React, { Suspense, useState, useEffect } from "react";
import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";

interface SceneProps {
  activeMenu: number | null;
}

export default function Scene({ activeMenu }: SceneProps) {
  const [mounted, setMounted] = useState(false);
  
  // Start with a lower performance profile on mobile
  const [dpr, setDpr] = React.useState(1);

  useEffect(() => {
    setMounted(true);
    
    // Set initial DPR based on device capabilities
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      setDpr(isMobile ? 1 : 1.5);
    }
  }, []);

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <div className="fixed top-0 w-full h-screen bg-[#f8f4ec] dark:bg-[#121212]">
        <div className="flex items-center justify-center h-full">
          <div className="text-black dark:text-white">Loading 3D Scene...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 w-full h-screen">
      <Canvas dpr={dpr} linear flat>
        <PerformanceMonitor 
          onDecline={() => setDpr(0.8)} 
          onIncline={() => setDpr(Math.min(dpr + 0.2, 2))}
        >
          <AdaptiveDpr pixelated />
          <Suspense fallback={null}>
            <Model activeMenu={activeMenu} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
