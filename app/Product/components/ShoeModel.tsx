"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Box } from "@react-three/drei";
import { Suspense, useState } from "react";
import { ShoeModel } from "../../../components/ShoeModel";
import { Button } from "@/components/ui/button";

export default function Scene() {
  const [showScene, setShowScene] = useState(false);

  if (!showScene) {
    return (
      <div className="flex justify-center items-center mx-10 mt-10">
        <Button onClick={() => setShowScene(true)} className="w-full">
          View 3D Model
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-lg h-[50vh] mx-10 mt-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Box scale={1.1} position={[0, -0.5, 0]} />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls
          enableDamping
          makeDefault
          target={[0, -0.5, 0]}
          minDistance={1.5}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
}