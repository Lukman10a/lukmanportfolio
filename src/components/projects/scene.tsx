import React, { Suspense } from "react";
import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";

interface SceneProps {
  activeMenu: number | null;
}

export default function Scene({ activeMenu }: SceneProps) {
  // Start with a lower performance profile on mobile
  const [dpr, setDpr] = React.useState(
    typeof window !== 'undefined' ? 
      window.innerWidth < 768 ? 1 : 1.5 : 
      1
  );

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
