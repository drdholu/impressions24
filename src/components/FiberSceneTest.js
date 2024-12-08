import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/models/paint kit mini.glb"); // Adjust the path to your GLB file
  // const { scene } = useGLTF("public/models/paint kit mini.glb");
  return <primitive object={scene} />;
};

const FiberScene2 = () => {
  const meshFitCameraHome = useRef();

  return (
    <Canvas>
      <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
        <boxGeometry args={[7.5, 2, 2]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <PerspectiveCamera makeDefault position={[0,1,0]}/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default FiberScene2;
