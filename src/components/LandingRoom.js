import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    PerspectiveCamera,
    Html,
    useGLTF,
    CameraControls,
    Environment,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "../images/Logos/name_logo.png";
import * as THREE from "three";

const Model = React.forwardRef((props, ref) => {
    const { scene } = useGLTF(props.url);
    const clonedScene = scene.clone();

    return (
        <primitive
            ref={ref}
            object={clonedScene}
            scale={props.scale}
            position={props.position}
            rotation={props.rotation}
        />
    );
});


const Navbar = forwardRef(({ displayNav, onClick, isInside }, ref) => {
    // const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const ref8 = useRef();
    useImperativeHandle(ref, () => ({
        ref1: ref1.current,
        ref2: ref2.current,
        ref3: ref3.current,
        ref4: ref4.current,
        ref5: ref5.current,
        ref6: ref6.current,
        ref7: ref7.current,
        ref8: ref8.current,
    }));

    const [hoveredItem, setHoveredItem] = useState(null);
    console.log(hoveredItem);
    const items = [
        { url: '/team', name: "Team", position: [-1.4, 10 - 5.5, 0], className: "text-red-500", ref: ref2 },
        { url: '/events', name: "Events", position: [-1.4, 9 - 5.5, 0], className: "text-red-500", ref: ref3 },
        { url: '/sponsors', name: "Sponsors", position: [-1.4, 8 - 5.5, 0], className: "text-red-500", ref: ref4 },
        { url: '/showflow', name: "Showflow", position: [-1.4, 7 - 5.5, 0], className: "text-red-500", ref: ref5 },
        { url: '/proshow', name: "Proshows", position: [-1.4, 6 - 5.5, 0], className: "text-red-500", ref: ref6 },
        { url: '/about', name: "About", position: [-1.4, 5 - 5.5, 0], className: "text-red-500", ref: ref7 },
        { url: '/contact', name: "Contact", position: [-1.4, 4 - 5.5, 0], className: "text-red-500", ref: ref8 },
    ]
    return (
        <mesh ref={ref1} position={[0, 15, -15]}>
            {items.map((item, idx) => {
                return (
                    <Html transform occlude={true} rotation={[0, 0, 0]} position={item.position}>
                        <div onMouseEnter={() => setHoveredItem(idx)} onMouseLeave={() => setHoveredItem(null)} ref={item.ref} className={`
                transition-all duration-300 ease-in-out
                ${displayNav ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                ${item.className}
                text-3xl font-bold
                flex justify-center items-center
                w-12 h-12 
                hover:scale-110 hover:brightness-110
                cursor-pointer
                text-black
                backdrop-blur-3xl
                font-panelFont
                transform`}>

                            <a href={item.url}>{item.name}</a>

                        </div>
                    </Html>
                )
            })}
            {isInside && <Html position={[0,0,0]}>
                <button
                    onClick={onClick}
                    style={{
                        position: "absolute",
                        // top: "20%",
                        // left: "50%",
                        // transform: "translateX(-50%)",
                        cursor: "pointer",
                        background: "white",
                        border: "none",
                        borderRadius: "5px",
                        zIndex: 10,
                    }}
                >
                    Go Back
                </button>
            </Html>}

        </mesh>
    );
});

const Room = () => {
    const RoomRef = useRef();
    const cameraControlsRef = useRef(null);
    const navbarRef = useRef();
    const [isInside, setIsInside] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [displayNav, setDisplayNav] = useState(false); // Add state for navbar visibility

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleEnter = () => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.setLookAt(
                0,
                17,
                0,
                0,
                0,
                -80,
                true
            );
            setShowLogo(false);
            setIsInside(true);
            setDisplayNav(true); // Show navbar when entering
        }
    };

    const handleTv = () => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.setLookAt(
                0, 0, -10,
                0, 0, -80,
                true
            )
        }
    }

    const handleBack = () => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.setLookAt(
                0,
                0,
                isMobile ? 150 : 200,
                0,
                0,
                0,
                true
            );
            setShowLogo(true);
            setIsInside(false);
            setDisplayNav(false); // Hide navbar when going back
        }
    };

    useEffect(() => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.enabled = false;
        }
    }, []);

    return (
        <>
            <AnimatePresence>
                {showLogo && (
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
                            zIndex: 1000,
                        }}
                    >
                        <motion.img
                            src={logoPath}
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
                    </motion.div>
                )}
            </AnimatePresence>

            <Canvas
                style={{
                    background: "linear-gradient(to bottom right, skyblue, black)",
                    height: "100vh",
                    width: "100vw",
                }}
                gl={{ antialias: true }}
                dpr={Math.min(window.devicePixelRatio, 2)}
            >
                <PerspectiveCamera
                    makeDefault
                    fov={isMobile ? 85 : 75}
                    position={[0, 0, isMobile ? 150 : 200]}
                    aspect={window.innerWidth / window.innerHeight}
                    far={1000}
                    near={0.1}
                />
                <CameraControls
                    ref={cameraControlsRef}
                    minDistance={100}
                    maxDistance={100}
                    enabledPan={false}
                    enabledZoom={false}
                    enabledRotate={false}
                    smoothTime={0.5}
                    dampingFactor={0.5}
                />
                <Model
                    ref={RoomRef}
                    position={[-6, 0, 10]}
                    scale={isMobile ? 0.8 : 1}
                    rotation={[0, 0.7, 0]}
                    url="/models/roomTest.glb"
                />
                <fog attach="fog" args={["#171720", 40, 50]}/>
                <Environment preset="sunset" />
                <Navbar ref={navbarRef} displayNav={displayNav} onClick={handleBack} isInside={isInside} /> {/* Pass displayNav prop to Navbar */}
                <Html fullscreen>
                    {!isInside && (
                        <button
                            onClick={handleEnter}
                            style={{
                                position: "absolute",
                                bottom: "20%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                padding: isMobile ? "8px 16px" : "10px 20px",
                                fontSize: isMobile ? "16px" : "18px",
                                cursor: "pointer",
                                background: "white",
                                border: "none",
                                borderRadius: "5px",
                                zIndex: 10,
                            }}
                        >
                            Enter Room
                        </button>
                    )}
                </Html>

                {/* {isInside ?
                    <Html fullscreen>
                        <button
                            onClick={handleTv}
                            style={{
                                position: "absolute",
                                bottom: "20%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                padding: isMobile ? "8px 16px" : "10px 20px",
                                fontSize: isMobile ? "16px" : "18px",
                                cursor: "pointer",
                                background: "white",
                                border: "none",
                                borderRadius: "5px",
                                zIndex: 10,
                            }}
                        >
                            Navbar
                        </button>
                    </Html>
                    :
                    null
                } */}
            </Canvas>
        </>
    );
};


useGLTF.preload("/public/models/roomTest.glb");
export default Room;

