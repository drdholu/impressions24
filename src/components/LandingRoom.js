import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from "three";
import React, { useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { PerspectiveCamera, Html, useGLTF, OrbitControls, RectAreaLight, useTexture, MeshReflectorMaterial, CameraControls, Environment, Shadow } from "@react-three/drei";
import { atom } from "jotai";
import { AmbientLight, Vector3 } from 'three'
import InProgress from "./ui/InProgress";
import gsap from 'gsap';
import logo from "../images/Logos/Name Logo filled.png";
import { AnimatePresence, motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ismobile = window.innerWidth < 930;

export const currentPageAtom = atom("intro");
const fov = 75;
const distance = 14;
const aspectRatio = window.innerWidth / window.innerHeight;

const verticalFOVInRadians = (fov * Math.PI) / 180;

const horizontalFOV =
  2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);

const worldWidth = ismobile
  ? 2 * Math.tan(horizontalFOV / 2) * distance * 0.8
  : 2 * Math.tan(horizontalFOV / 2) * distance * 0.5;
const totalwidth = 2 * Math.tan(horizontalFOV / 2) * distance;

const worldHeight = ismobile
  ? worldWidth * (window.innerHeight / window.innerWidth) * 0.27
  : worldWidth * (window.innerHeight / window.innerWidth) * 0.8;
const totalheight = totalwidth * (window.innerHeight / window.innerWidth);

const ImageMesh = forwardRef((props, ref) => {
  const texture = useLoader(THREE.TextureLoader, logo); // Load texture

  return (
    <mesh ref={ref} position={[0, 2, -10]} castShadow>
      <planeGeometry args={[worldWidth, worldHeight]} />
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
});


const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + props.url);
  const clonedScene = scene.clone();

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // Enable shadow casting
        child.receiveShadow = true; // Enable shadow receiving
      }
    });
  }, [clonedScene]);

  return (
    <group dispose={null}>
      <primitive
        ref={ref}
        object={clonedScene}
        scale={props.scale}
        position={props.position}
        rotation={props.rotation}
      />
    </group>
  );
});



const Room = () => {

  const RoomRef = useRef();
  const cameraRef = useRef();
  const start = useState(true); // Control to trigger animation once
  const Controls = useRef();
  const [blur, setblur] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const [isVisible, setIsVisible] = useState(false);
  const [buttons, setbuttons] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeButton, setActiveButton] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const returnToStart = () => {
    if (isAnimating || blur) return;

    setIsAnimating(true);
    setbuttons(false);
    setIsVisible(false);
    setIsVisible1(false);

    const timeline = gsap.timeline({
      defaults: { duration: 2.5, ease: "power4.inOut" },
      onComplete: () => {
        setIsAnimating(false);
        setblur(true);
      },
    });

    timeline
      .to(cameraRef.current.position, { z: 10, x: 0 })
      .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<");
  };

  // Add ESC key listener
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //       returnToStart();
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [blur]);

  useEffect(() => {
    const targetDate = new Date('2024-12-17');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!buttons) return;

      if (event.key === 'ArrowLeft') {
        turn('left');
        setActiveButton('left');
      } else if (event.key === 'ArrowRight') {
        turn('right');
        setActiveButton('right');
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setActiveButton(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [buttons]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && blur) {  // Only handle Enter key when blur overlay is visible
        Move();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [blur]); // Add blur as dependency

  const turn = (dir) => {
    if (isAnimating) return;
    console.log("HERE2");
    if (!cameraRef.current) return;

    const rotationSpeed = Math.PI / 8; // Adjust for desired rotation (in radians)

    const newRotationY =
      dir === "left"
        ? cameraRef.current.rotation.y + rotationSpeed
        : cameraRef.current.rotation.y - rotationSpeed;
    console.log(newRotationY);
    if (dir === "right" && (ismobile ? newRotationY < -2 : newRotationY < -1.5)) {
      return;
    }
    if (dir === "left" && (ismobile ? newRotationY > 1.5 : newRotationY > 1.17)) {
      return;
    }
    setIsAnimating(true);
    // Animate the rotation using GSAP
    gsap.to(cameraRef.current.rotation, {
      y: newRotationY,
      duration: 1, // Duration in seconds
      ease: "power2.out", // Smooth easing
      onComplete: () => {
        setIsAnimating(false);
      }
    });
  };


  const Move = (event) => {
    console.log("herem");


    if (cameraRef.current && RoomRef && !isAnimating) {  // Check if not animating
      setIsAnimating(true);  // Set the flag to true when animation starts
      console.log(cameraRef.current.position.z);
      if (cameraRef.current.position.z > 0) {
        setblur(false);
        setShowBackButton(true);  // Show back button after initial move

        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {
            setbuttons(true);
            setIsVisible1(true);
            setIsAnimating(false);  // Set flag to false when animation completes
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -65 : -105, x: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")
      }
      else if (ismobile ? cameraRef.current.position.z >= -65 : cameraRef.current.position.z > -110) {
        console.log("OKKK");
        setIsVisible1(false);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {
            setbuttons(false);
            setIsAnimating(false);  // Set flag to false when animation completes
            setIsVisible(true);
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -75 : -140, x: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")
      }
      else {
        setIsVisible(false);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {
            setIsVisible1(true);
            setbuttons(true);
            setIsAnimating(false);  // Set flag to false when animation completes
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -65 : -105, x: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")

      }
    }
  };

  useEffect(() => {
    return () => {

    };
  }, []);
  return (
    <>
      {/* Add Back Button */}
      {showBackButton && !blur && (
        <motion.button
          onClick={returnToStart}
          className="fixed top-5 right-5 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          ESC to Return
        </motion.button>
      )}
      {/* Animation Presence for Exit Animations */}
      {buttons && <AnimatePresence>
        <motion.div
          className="flex justify-between"
          style={{
            width: "100vw",
            position: 'absolute',  // Position absolute to the viewport
            top: '70%',            // Position vertically in the center
            left: '50%',           // Position horizontally in the center
            transform: 'translate(-50%, -50%)',  // Offset by half width/height to truly center it
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1000,            // Ensure it's above other elements
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}

        >
          <motion.button
            onClick={() => turn("left")}
            className="p-4 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
            animate={{
              scale: activeButton === 'left' ? 0.9 : 1,
              backgroundColor: activeButton === 'left' ? '#e5e5e5' : '#ffffff'
            }}
            transition={{ duration: 0.1 }}
          >
            Left
          </motion.button>
          <motion.button
            onClick={() => turn("right")}
            className="p-4 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
            animate={{
              scale: activeButton === 'right' ? 0.9 : 1,
              backgroundColor: activeButton === 'right' ? '#e5e5e5' : '#ffffff'
            }}
            transition={{ duration: 0.1 }}
          >
            Right
          </motion.button>
        </motion.div>
      </AnimatePresence >}
      <AnimatePresence>
        {blur && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center'
            }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
            <button onClick={Move} className={`${ismobile ? 'h-[5vh]' : 'h-[5vh] w-[5vw]'} bg-transparent text-white hover:scale-105 transition-transform`}>
              ENTER (↵)
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Scene */}

      <Canvas
        style={{
          background: "linear-gradient(to bottom right, skyblue, black)",
          height: "100vh",
          width: "100vw",
        }}
        shadows
      >

        {/* 3D Model */}
        <Model
          ref={RoomRef}
          rotation={ismobile ? [0, 0.8, 0] : [0, 0.9, 0]}
          position={ismobile ? [0, -9, -70] : [0, -25, -120]}
          scale={ismobile ? [0.5, 0.5, 0.5] : [1.5, 1.5, 1.5]}
          url={"models/roomTest.glb"}
        />

        {/* Camera */}
        <PerspectiveCamera
          fov={75}
          ref={cameraRef}
          makeDefault
          position={[0, 0, 10]}
          aspect={window.innerWidth / window.innerHeight}
          far={1000}
          near={0.1}
        />

        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          intensity={1.5}
          position={[10, 20, 5]}
        // shadow-mapSize={[2048, 2048]}
        />
        <directionalLight
          castShadow
          position={[0, 20, 5]}
          intensity={1}
        // shadow-mapSize={[2048, 2048]}
        />


        <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.5} />
        </mesh>

        {/* <Environment preset="sunset" /> */}
        <Html transform occlude={true} position={ismobile ? [0, 2, -80] : [4, 5.5, -150]} className="bg-beige" rotation={ismobile ? [0, 0, 0] : [0, -1, 0]}>
          <button onClick={Move} className={`text-white ${isVisible ? 'flex' : 'hidden'}`}>BACK</button>
        </Html>
        <Html transform occlude={true} position={ismobile ? [-3, 0.5, -70] : [-8, 1.5, -115]} rotation={[0, 1, 0]}>
          <div
            className={`${isVisible1 ? 'flex' : 'hidden'} items-center justify-center font-hindi text-white h-[15vh] w-[15vw] text-[4em]`}
          >
            {timeLeft.days + ":" + timeLeft.hours + ":" + timeLeft.minutes + ":" + timeLeft.seconds}
          </div>
        </Html>
        <Html
          occlude={true}
          transform
          position={ismobile ? [0.2, 0.5, -80] : [-3, 2, -140]}
          className="flex items-center justify-center w-full h-full"
        >
          <button
            onClick={Move}
            className={`animate-pulse ${isVisible1 ? 'block' : 'hidden'} text-center ${ismobile ? 'h-[10vh]' : 'h-[6em] w-[10em] text-[3vh]'} bg-black/50 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out`}
          >
            EXPLORE PAGES
          </button>
        </Html>

        <Html transform occlude={true} position={ismobile ? [0, -0.5, -80] : [-4.5, 0.5, -155]} rotation={[-0.25, 0.15, 0]} center>
          <div
            style={{
              width: ismobile ? "20vw" : "25vw",
              height: ismobile ? "10vh" : "40vh",
              borderRadius: "20px",
              // boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              padding: "10px",
              fontFamily: "'Brush Script MT', cursive",
              textAlign: "center",
              color: "#333",
              display: isVisible ? "flex" : "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: ismobile ? "5px" : "4em" }}>🎨 Drawing Board</h1>
            <div style={{ fontSize: ismobile ? "5px" : "3em", zIndex: "1" }} className="flex flex-col cursor-pointer">
              <a href="/events">📜 Events</a>
              <a href="/team">🤝 Teams</a>
              <a href="/about">📖 About Us</a>
            </div>
          </div>
        </Html>

      </Canvas>
    </>
  );
};

useGLTF.preload("models/roomTest.glb");
useGLTF.preload("../images/Logos/Name Logo filled.png");
export default Room;