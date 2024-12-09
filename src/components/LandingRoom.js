import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from "three";
import React, { useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { PerspectiveCamera, Html, useGLTF, OrbitControls, RectAreaLight, useTexture, MeshReflectorMaterial, CameraControls, Environment } from "@react-three/drei";
import { atom } from "jotai";
import { AmbientLight, Vector3 } from 'three'
import InProgress from "./ui/InProgress";
import gsap from 'gsap';
import logo from "../images/Logos/Name Logo filled.png";
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
  // const { scene } = useGLTF(process.env.PUBLIC_URL + "/models/paint kit mini.glb");
  const { scene } = useGLTF(process.env.PUBLIC_URL + props.url);
  const clonedScene = scene.clone();

  // const [isHovered, setIsHovered] = useState(false);
  return (
    <primitive
      ref={ref}
      object={clonedScene}
      scale={props.scale}
      position={props.position}
      rotation={props.rotation}
    />
  )
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
      else if (ismobile?cameraRef.current.position.z >= -65:cameraRef.current.position.z > -110) {
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
  ;
  useEffect(() => {
    return () => {

    };
  }, []);
  return (
    <>
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
          <button onClick={() => turn("left")} className="bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faArrowLeft} className="text-4xl" />
          </button>
          <button onClick={() => turn("right")} className="bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faArrowRight} className="text-4xl" />
          </button>
        </motion.div>
      </AnimatePresence >
      }
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
            <button onClick={Move} className={`${ismobile?'h-[5vh]':'h-[5vh] w-[5vw]'} bg-transparent text-white`}>
              ENTER
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
      >
        {/* 3D Model */}
        <Model
          ref={RoomRef}
          rotation={ismobile?[0,0.8,0]:[0, 0.9, 0]}
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

        <Environment preset="sunset" />
        <Html transform occlude={true} position={ismobile?[0,2,-80]:[5, 1, -150]} className="bg-beige" rotation={ismobile?[0,0,0]:[0, -1, 0]}>
          <button onClick={Move} className={`text-white ${isVisible ? 'flex' : 'hidden'}`}>BACK</button>
        </Html>
        <Html transform occlude={true} position={ismobile?[-3,0.5,-70]:[-5, 1, -110]} rotation={[0, 1, 0]}>
          <div
            className={`${isVisible1?'flex':'hidden'} items-center justify-center font-hindi text-white h-[15vh] w-[15vw] text-[2em]`}
          >
            {timeLeft.days + ":" + timeLeft.hours + ":" + timeLeft.minutes + ":" + timeLeft.seconds }
          </div>
        </Html>
        <Html
          occlude={true}
          transform
          position={ismobile?[0.2,0.5,-80]:[-2, 2, -140]}
          className="flex justify-center items-center w-full h-full"
        >
          <button
            onClick={Move}
            className={`${isVisible1 ? 'block' : 'hidden'} text-center ${ismobile?'h-[10vh]':'h-[15vh] w-[15vw] text-[3vh]'} bg-transparent text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out`}
          >
            ENTER WITHIN
          </button>
        </Html>

        <Html transform occlude={true} position={ismobile?[0,-0.5,-80]:[-2.5, 0.5, -160]} rotation={[-0.25, 0.15, 0]} center>
          <div
            style={{
              width: ismobile?"20vw":"25vw",
              height: ismobile?"10vh":"40vh",
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
            <h1 style={{ margin: 0, fontSize: ismobile?"5px":"4em" }}>🎨 Drawing Board</h1>
            <div style={{ fontSize: ismobile?"5px":"3em", zIndex: "1" }} className="cursor-pointer flex flex-col">
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