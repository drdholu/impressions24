import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import logo from "../images/Logos/Name Logo filled1.png";
import { PerspectiveCamera } from "@react-three/drei";
import grnd from "../images/ground1.webp";

const ismobile = window.innerWidth < 1024;
const fov = 75;
const distance = 14;
const aspectRatio = window.innerWidth / window.innerHeight;

const verticalFOVInRadians = (fov * Math.PI) / 180;

const horizontalFOV =
  2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);

const worldWidth = ismobile
  ? 2 * Math.tan(horizontalFOV / 2) * distance * 0.7
  : 2 * Math.tan(horizontalFOV / 2) * distance * 0.5;
const totalwidth = 2 * Math.tan(horizontalFOV / 2) * distance;

const worldHeight = ismobile
  ? worldWidth * (window.innerHeight / window.innerWidth) * 0.27
  : worldWidth * (window.innerHeight / window.innerWidth) * 0.8;
const totalheight = totalwidth * (window.innerHeight / window.innerWidth);

const ImageMesh = () => {
  const imageMeshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, logo);

  return (
    <mesh ref={imageMeshRef} position={[0, totalheight / 4, 1]} castShadow>
      <planeGeometry args={[worldWidth, worldHeight]} />{" "}
      {/* Initial size; updated dynamically */}
      <meshStandardMaterial map={texture} transparent alphaTest={0.5} />
    </mesh>
  );
};

const Ground = () => {
  const groundRef = useRef();
  const texture = useLoader(THREE.TextureLoader, grnd);

  return (
    <mesh
      ref={groundRef}
      position={[0, -1, 0]}
      castShadow
      rotation={[-Math.PI / 2, 0, 0]} // Lay the ground flat
      receiveShadow
    >
      <planeGeometry args={[200, 50]} /> {/* Initial size; updated dynamically */}
      <meshStandardMaterial map={texture} transparent alphaTest={0.5} />
    </mesh>
  );
};

// Red Dot Component
const RedDot = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 16, 16]} /> {/* Small sphere */}
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const App = () => {
    const cameraref=useRef();
    const mlight=useRef();
    const light1Position = ismobile?new THREE.Vector3(totalwidth*0.17,totalheight*0.42, 1):new THREE.Vector3(-7,5, 3);
    const light2Position =ismobile?new THREE.Vector3(-totalwidth*0.22, totalheight*0.45, 2):new THREE.Vector3(5,3, 3);
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const onMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        const camera=cameraref.current;
        const mouseLight=mlight.current;
        if(camera && mouseLight){
        raycaster.setFromCamera(mouse, camera);
        
        
        }
        const targetPlaneZ = 2;
        const planeNormal = new THREE.Vector3(0, 0, -1);
        const plane = new THREE.Plane(planeNormal, targetPlaneZ);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, intersectPoint);
        
        if (intersectPoint && mouseLight) {
          mouseLight.position.copy(intersectPoint);
        }
      };
      window.addEventListener('mousemove', onMouseMove);
  return (
    <div>
      <Canvas
        style={{ background: "#000000", height: "100vh", width: "100vw" }}
      >
        <PerspectiveCamera
          fov={75}
          ref={cameraref}
          makeDefault
          position={[0, 5, 15]}
          aspect={window.innerWidth / window.innerHeight}
          far={1000}
          near={0.1}
        />
        <pointLight intensity={40} position={light1Position} color="red" castShadow distance={20}/>
        <pointLight intensity={40} position={light2Position} color="red" castShadow distance={10}/>
        <pointLight ref={mlight} intensity={50} position={light2Position} color="red" castShadow distance={10}/>

        {/* <RedDot position={light1Position} />
        <RedDot position={light2Position} /> */}
        <ImageMesh />
        <Ground />
      </Canvas>
    </div>
  );
};

export default App;




//const RotatingBox = () => {
    //   const boxRef = useRef();
    
    //   // Animation loop for rotation
    //   React.useEffect(() => {
    //     let frameId;
    //     const rotateBox = () => {
    //       if (boxRef.current) {
    //         boxRef.current.rotation.x += 0.01;
    //         boxRef.current.rotation.y += 0.01;
    //       }
    //       frameId = requestAnimationFrame(rotateBox);
    //     };
    //     rotateBox();
    
    //     return () => cancelAnimationFrame(frameId); // Cleanup
    //   }, []);
    
    //   return (
    //     <mesh ref={boxRef}>
    //       <boxGeometry args={[1, 1, 1]} />
    //       <meshStandardMaterial color="blue" />
    //     </mesh>
    //   );
    // };