import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { PerspectiveCamera, Html, useGLTF, Environment } from "@react-three/drei";
import gsap from 'gsap';
import logo from "../images/Logos/Name Logo filled.png";
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { urls } from "../url";
var ismobile = window.innerWidth < 930;



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
  const [blur, setblur] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const [isVisible, setIsVisible] = useState(false);
  const [buttons, setbuttons] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  let startX = 0; // Track the starting X position of the touch
  let isTouchScrolling = false; // To ensure a touch scroll is in progress

  // Touch Start Event
  const onTouchStart = (event) => {
    // Check if the event is a touch or mouse event
    if (event.type === "touchstart" && event.touches && event.touches.length === 1) {
      startX = event.touches[0].clientX; // Record the initial touch position
      isTouchScrolling = true; // Enable scrolling flag
    } else if (event.type === "mousedown") {
      startX = event.clientX; // Record the initial mouse position
      isTouchScrolling = true; // Enable scrolling flag
    }
  };

  // Touch Move Event
  const onTouchMove = (event) => {
    // Check if scrolling is enabled (whether it's from touch or mouse)
    if (isTouchScrolling) {
      let currentX;

      // Handle touch move
      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX; // Get the current touch position
      }
      // Handle mouse move
      else if (event.type === "mousemove") {
        currentX = event.clientX; // Get the current mouse position
      }

      const deltaX = startX - currentX; // Calculate the horizontal movement
      console.log("Moving:", deltaX);

      if (Math.abs(deltaX) > 5) {
        startX = currentX; // Update the start position for smooth movement

        // Call a function to update the camera
        onCameraMove({ type: event.type, deltaX });
      }
    }
  };

  const onTouchEnd = (event) => {
    // Reset scrolling flag when touch or mouse ends
    isTouchScrolling = false;
  };



  const onCameraMove = ({ deltaX }) => {
    if (!cameraRef.current || blur || isVisible) return;
    const moveSpeed = 0.00005; // Adjust sensitivity
    console.log(cameraRef.current.rotation.y - deltaX * moveSpeed);
    const newRotationY = cameraRef.current.rotation.y - deltaX * moveSpeed;
    if (ismobile ? newRotationY < -2 : newRotationY < -1.5) {
      return;
    }
    if (ismobile ? newRotationY > 1.5 : newRotationY > 1.17) {
      // console.log("2");
      return;
    }
    cameraRef.current.rotation.y = newRotationY;
    // cameraRef.current.updateProjectionMatrix(); // Ensure the camera updates
  };

  // Add Event Listeners
  document.addEventListener("touchstart", onTouchStart, { passive: true });
  document.addEventListener("touchmove", onTouchMove, { passive: true });
  document.addEventListener("touchend", onTouchEnd, { passive: true });
  document.addEventListener("mousedown", onTouchStart, { passive: true });
  document.addEventListener("mousemove", onTouchMove, { passive: true });
  document.addEventListener("mouseup", onTouchEnd, { passive: true });


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
  console.log(timeLeft);
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

  const MoveToPhotos = () => {
    if (cameraRef.current && RoomRef && !isAnimating) {
      if (ismobile ? cameraRef.current.position.z >= -65 : cameraRef.current.position.z > -110) {
        setIsAnimating(true);
        setbuttons(false);
        setShowBackButton(false);
        setIsVisible1(false);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {

            setIsAnimating(false);  // Set flag to false when animation completes
            setIsVisible(true);
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -70 : -135, x: ismobile ? 5 : 15, y: ismobile ? 4 : 6 })
          .to(cameraRef.current.rotation, { y: -0.72, x: 0 }, "<")
      }
    }
  }
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
          .to(cameraRef.current.position, { z: ismobile ? -65 : -105, x: 0, y: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")
      }
      else if (ismobile ? cameraRef.current.position.z >= -65 : cameraRef.current.position.z > -110) {
        console.log("OKKK");
        setbuttons(false);
        setIsVisible1(false);
        setShowBackButton(false);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {

            setIsAnimating(false);  // Set flag to false when animation completes
            setIsVisible(true);
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -70 : -140, x: 0, y: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")
      }
      else {
        setIsVisible(false);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {
            setShowBackButton(true);
            setIsVisible1(true);
            setbuttons(true);
            setIsAnimating(false);  // Set flag to false when animation completes
          },
        });

        timeline
          .to(cameraRef.current.position, { z: ismobile ? -65 : -105, x: 0, y: 0 })
          .to(cameraRef.current.rotation, { y: 0, x: 0 }, "<")

      }
    }
  };

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
      else if (event.key === "Enter" && blur) {
        Move();
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
  });

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
  }); // Add blur as dependency



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
          Return
        </motion.button>
      )}
      {isVisible && !blur && (
        <motion.button
          onClick={Move}
          className="fixed top-5 right-5 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          BACK
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
            <ArrowLeft />
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
            <ArrowRight />
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
            <button onClick={Move} className={`${ismobile ? 'h-[5vh]' : 'h-[5vh] w-[5vw]'} bg-transparent text-white`}>
              {RoomRef.current ? "ENTER" : "LOADING"}
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
          url={"models/roomTest1.glb"}
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
        <Html transform occlude={true} position={ismobile ? [0, 2, -80] : [20, 15, -135]} rotation={ismobile ? [0, 0, 0] : [0, -0.8, 0]}>
          <button
            onClick={MoveToPhotos}
            style={{
              height: '8vh',
              position: 'relative',
              padding: '10px 20px',
              backgroundColor: '#4A2C1D', // Dark brown base color
              color: '#F5E6D3', // Warm off-white text
              border: '3px solid #8B4513', // Wooden frame brown border
              borderRadius: '15px',
              // fontFamily: "'Comic Sans MS', cursive, sans-serif",
              fontSize: '1.5em',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)', // Subtle shadow
              transform: 'perspective(300px) rotateX(10deg)', // Slight 3D tilt
              overflow: 'hidden',
              display: ismobile ? 'none' : isVisible1 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              // Paint splatter overlay effect
              backgroundImage: 'linear-gradient(135deg, rgba(255,99,71,0.2) 0%, rgba(65,105,225,0.2) 100%)',
              backgroundBlendMode: 'overlay'
            }}
            className="hover:scale-105 hover:brightness-110 active:scale-95 animate-pulse"
          >
            {/* Camera icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                marginRight: '10px',
                transform: 'translateZ(10px)' // Slight 3D effect
              }}
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            See Photos
          </button>
        </Html>
        <Html transform occlude={true} position={ismobile ? [-6.6, 1.4, -75] : [-35, 7, -145]} rotation={[0, 0.8, 0]}>
          {/* <div
            className={`${isVisible1 ? 'flex' : 'hidden'} items-center justify-center font-hindi text-white h-[15vh] w-[15vw] text-[2em]`}
          >
            {timeLeft.days + ":" + timeLeft.hours + ":" + timeLeft.minutes + ":" + timeLeft.seconds}
          </div> */}
          <div
            className={`${isVisible1 ? 'flex' : 'hidden'} flex-col items-center justify-center font-hindi opacity-1`}
            style={{
              background: "linear-gradient(90deg, #ffcc00, #33cc99, #6699ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

            }}
          >
            <div className="text-[20vw]">
              RANGREZ
            </div>
            <div className="text-[8vw]">
              The Artist Within
            </div>
          </div>

        </Html>
        <Html
          occlude={true}
          transform
          position={ismobile ? [-0.5, 0.5, -80] : [-4, 2, -140]}
          className="flex items-center justify-center w-full h-full"
        >
          <button
            onClick={Move}
            style={{
              position: 'relative',
              display: isVisible1 ? 'block' : 'none',
              height: ismobile ? '10vh' : '15vh',
              width: ismobile ? '45vw' : '15vw',
              fontSize: ismobile ? '2vh' : '3vh',
              backgroundColor: 'transparent',
              color: '#4A2C1D', // Dark brown text to match our theme
              // fontFamily: "'Comic Sans MS', cursive, sans-serif",
              fontWeight: 600,
              border: '3px solid #8B4513', // Wooden frame brown
              borderRadius: '50px', // Extra rounded to feel hand-drawn
              padding: '10px 20px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)', // Subtle shadow
              transform: 'perspective(300px) rotateX(5deg)', // Slight 3D tilt
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(139,69,19,0.1) 100%)', // Subtle gradient overlay
              backgroundBlendMode: 'overlay'
            }}
            className="hover:scale-105 hover:brightness-110 active:scale-95 focus:outline-none"
          >
            {/* Decorative paint splatter */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255,99,71,0.3)', // Soft red
                borderRadius: '50%',
                transform: 'rotate(45deg)',
                zIndex: -1
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(65,105,225,0.3)', // Soft blue
                borderRadius: '50%',
                transform: 'rotate(-45deg)',
                zIndex: -1
              }}
            />

            Explore Pages

            {/* Subtle underline effect */}
            <span
              style={{
                position: 'absolute',
                bottom: '5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '3px',
                backgroundColor: '#4A2C1D',
                opacity: 0.5
              }}
            />
          </button>
        </Html>

        <Html transform occlude={true} position={ismobile ? [-0.5, -0.5, -80] : [-4.5, 0.5, -155]} rotation={ismobile ? [-0.25, 0.15, -0.05] : [-0.25, 0.15, 0]} center>
          <div
            style={{
              width: ismobile ? "42vw" : "25vw",
              // height: ismobile ? "20vh" : "40vh",
              borderRadius: "20px",
              padding: "20px",
              fontFamily: "'Comic Sans MS', cursive, sans-serif", // Handwritten-style font
              textAlign: "center",
              color: "#4A2C1D", // Dark brown for text
              display: isVisible ? "flex" : "none",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "15px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Subtle shadow for depth
              transform: "rotate(-2deg)", // Slight tilt for hand-drawn feel
              backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", // Canvas texture
              backgroundSize: "20px 20px",
              position: "relative",
              overflow: "hidden"

            }}
          >
            {/* Paint splatter effect */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#FF6347',
                borderRadius: '50%',
                opacity: 0.5,
                transform: 'rotate(45deg)',
                display: 'flex',
                flexDirection: 'column'
              }}
            />
            <h1
              style={{
                margin: 0,
                top: 0,
                fontSize: ismobile ? "0.9em" : "3em",
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)' // Pencil-like shadow
              }}
            >
              🎨 Drawing Board
            </h1>

            <div
              style={{
                fontSize: ismobile ? "1em" : "2em",
                zIndex: "1",
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
              className="cursor-pointer"
            >
              {urls.map((url, idx) => {
                return (
                  <a
                    href={url.url}
                    style={{
                      textDecoration: 'none',
                      color: '#4A2C1D',
                      transition: 'transform 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'skew(-5deg)' // Hand-drawn, slightly askew look
                    }}
                    className="hover:scale-105"
                  >
                    {url.name === "Home" ? null : url.name}
                  </a>
                )
              })}

            </div>

            {/* Additional paint splatter effect */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '70px',
                height: '70px',
                backgroundColor: '#4169E1',
                borderRadius: '50%',
                opacity: 0.3,
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        </Html>
      </Canvas>
    </>
  );
};

useGLTF.preload("models/roomTest1.glb");
useGLTF.preload("../images/Logos/Name Logo filled.png");
export default Room;