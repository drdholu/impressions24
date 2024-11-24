import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/models/paint kit mini.glb"); // Adjust the path to your GLB file
  // const { scene } = useGLTF("public/models/paint kit mini.glb");
  return <primitive object={scene} />;
};

const FiberScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default FiberScene;
