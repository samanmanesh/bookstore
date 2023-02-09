import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "@/components/box";
import { OrbitControls } from "@react-three/drei";


export default function Home() {
  return <div className='h-[85vh] '>
    <Canvas className='h-full ' >
      <OrbitControls  enableZoom={false}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1.5} />
        <Box />
      </Canvas>

  </div>;
};
