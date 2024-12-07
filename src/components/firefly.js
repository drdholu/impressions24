import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

// Firefly Component
const Firefly = ({ position }) => {
  const fireflyRef = useRef();
  const lightRef = useRef();
  
  // Random movement animation for the firefly
  useFrame(() => {
    const time = Date.now() * 0.001;
    fireflyRef.current.position.x += Math.sin(time * 2) * 0.05;
    fireflyRef.current.position.y += Math.cos(time * 2) * 0.05;
    fireflyRef.current.position.z += Math.sin(time * 1.5) * 0.05;

    // Update light position to match firefly
    lightRef.current.position.copy(fireflyRef.current.position);
  });

  return (
    <>
      {/* Firefly Mesh (Small glowing sphere) */}
      <mesh ref={fireflyRef} position={position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
      </mesh>

      {/* Glowing Point Light */}
      <pointLight
        ref={lightRef}
        position={position}
        intensity={1}
        distance={5}
        decay={2}
        color="yellow"
      />
    </>
  );
};

// Firefly Scene with Dynamic Fireflies
const FireflyScene = ({ numFireflies = 10 }) => {
  const fireflies = [];

  // Generate random positions for each firefly
  for (let i = 0; i < numFireflies; i++) {
    const position = new Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
    fireflies.push(position);
  }

  return (
    <Canvas>
      {/* Map through fireflies and render them dynamically */}
      {fireflies.map((position, index) => (
        <Firefly key={index} position={position} />
      ))}
    </Canvas>
  );
};

export default FireflyScene;
