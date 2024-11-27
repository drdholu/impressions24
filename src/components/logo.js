import React, { useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const logoo = ({ logo, width, height, scaleFactor = 1 }) => {
  const texture = useLoader(THREE.TextureLoader, logo); // Load texture
  const imageMeshRef = useRef(); // Reference for the mesh
  const { camera, scene } = useThree(); // Access camera and scene

  // Update image size (similar to your `updateImageSize`)
  React.useEffect(() => {
    if (imageMeshRef.current) {
      const aspect = camera.aspect;
      const planeScale = scaleFactor / aspect;
      imageMeshRef.current.scale.set(planeScale, planeScale, 1);
    }
  }, [camera, scaleFactor]);

  return (
    <mesh
      ref={imageMeshRef}
      position={[0, 6, 1]} // Equivalent to `.position.set(0, 6, 1)`
      castShadow
    >
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        transparent
        alphaTest={0.5} // To handle transparency
      />
    </mesh>
  );
};

export default logoo;
