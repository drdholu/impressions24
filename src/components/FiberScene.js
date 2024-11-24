import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("public/models/paint kit mini.glb"); // Adjust the path to your GLB file
  return <primitive object={scene} />;
};

const Viewer = () => {
  return (
    <div>
        <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model />
        <OrbitControls />
        </Canvas>
    </div>
  );
};

export default Viewer;
