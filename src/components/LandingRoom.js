import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { PerspectiveCamera, Html, useGLTF, OrbitControls, RectAreaLight, useTexture, MeshReflectorMaterial, CameraControls, Environment } from "@react-three/drei";
import { atom } from "jotai";
import { AmbientLight, Vector3 } from 'three'
import InProgress from "./ui/InProgress";
import gsap from 'gsap';
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
    // const start = useState(true); // Control to trigger animation once
    // const Controls = useRef();
    const Move = (event) => {
        console.log("here");
        if (cameraRef.current && RoomRef) {

            if (cameraRef.current.position.z > 0) {
                const timeline = gsap.timeline({
                    defaults: { duration: 2.5, ease: "power4.inOut" },
                    onComplete: () => {
                    },
                });

                timeline
                    .to(cameraRef.current.position, ismobile ? { z: -50 } : { z: -80, x: 0 })
                    .to(RoomRef.current.rotation, { y: -0.04 }, "<")
            }
            else {
                const timeline = gsap.timeline({
                    defaults: { duration: 2.5, ease: "power4.inOut" },
                    onComplete: () => {
                    },
                });

                timeline
                    .to(cameraRef.current.position, ismobile ? { z: 1 } : { z: 1, x: 0 })
                    .to(RoomRef.current.rotation, { y: 0.9 }, "<")
            }
        }

    };
    useEffect(() => {
        // Adding the scroll event listener
        window.addEventListener('scroll', Move);
        window.addEventListener('wheel', Move);
        window.addEventListener('touchstart', Move);

        // Cleanup to remove event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', Move);
            window.removeEventListener('wheel', Move);
            window.removeEventListener('touchstart', Move);
        };
    }, []); // Empty dependency array to run only once after component mount
    return (
        <Canvas
            style={{
                background: "linear-gradient(to bottom right, skyblue, black)",
                height: "100vh",
                width: "100vw",
            }}
        >
            <Model
                ref={RoomRef}
                rotation={[0.3, 0.8, 0]}
                position={[0, 0, -80]}
                scale={1}
                url={"/models/roomTest.glb"}
            />
            {/* <ambientLight /> */}
            <Environment preset="sunset" />

            {/* Camera */}
            {/* <PerspectiveCamera
                fov={75}
                ref={cameraRef}
                makeDefault
                position={[0, 0, 1]}
                aspect={window.innerWidth / window.innerHeight}
                far={1000}
                near={0.1}
            /> */}
            {/* Room Model */}

        </Canvas>
    );
};

export default Room;

