import { Canvas, useLoader ,useFrame} from "@react-three/fiber";
import * as THREE from "three";
import logo from "../images/Logos/Name Logo filled1.png";
import logo1 from "../images/Logos/Name Logo filled.png";
import React, { useRef, useEffect, forwardRef, useState,useImperativeHandle } from "react";
import { PerspectiveCamera, Html, useGLTF, OrbitControls } from "@react-three/drei";
import grnd from "../images/ground1.webp";
import cleodance from "../images/Dance.png"
import cleostand from "../images/Cleo1.png"
import gsap from 'gsap';
import { atom } from "jotai";
import {AmbientLight} from 'three'

const ismobile = window.innerWidth < 650;

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
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/models/paint kit mini.glb"); // Adjust the path to your GLB file
  return (
    <>
      {/* <OrbitControls/> */}
      <primitive ref={ref} object={scene} scale={[110, 110, 110]} position={[0, 3, -100]} rotation={[0.25, 8, 0]} />;
    </>
  )
});

const Navbar = forwardRef(({ displayNav }, ref) => {
  // const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const ref1 = useRef();
  const ref2 = useRef();
  useImperativeHandle(ref, () => ({
    ref1: ref1.current,
    ref2: ref2.current,
  }));
  return (
    <mesh ref={ref1} position={[-3, 2.5, -100]}>
      <Html transform occlude={true} rotation={[2, 0, 0]}>
        <div ref={ref2} className={`w-2 h-2 ${displayNav ? "block" : "hidden"} bg-red-700`}>
        </div>
      </Html>
    </mesh>
  );
});

const ImageMesh = forwardRef((props, ref) => {
  const texture = useLoader(THREE.TextureLoader, logo); // Load texture

  return (
    <mesh ref={ref} position={[0, totalheight / 4, 1]} castShadow>
      <planeGeometry args={[worldWidth, worldHeight]} />
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
});

const Ground = forwardRef((props, ref) => {
  const texture = useLoader(THREE.TextureLoader, grnd); // Load texture

  return (
    <mesh
      ref={ref}
      position={[0, -1, 0]}
      castShadow
      rotation={[-Math.PI / 2, 0, 0]} // Lay the ground flat
      receiveShadow
    >
      <planeGeometry args={[200, 50]} /> {/* Initial size; updated dynamically */}
      <meshStandardMaterial map={texture} transparent={true} alphaTest={0.5} />
    </mesh>
  );
});

const Loadimage = forwardRef(({ img, height, width, position }, ref) => {
  const texture = useLoader(THREE.TextureLoader, img); // Load texture

  return (
    <mesh
      ref={ref}
      position={position}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[width, height]} /> {/* Initial size; updated dynamically */}
      <meshStandardMaterial map={texture} transparent={true} alphaTest={0.5} />
    </mesh>
  );
});

// Red Dot Component
const RedDot = forwardRef(({ position, radi = ismobile ? 0.1 : 0.25 }, ref) => {
  return (
    <mesh position={position} scale={[1, 1.8, 1]} ref={ref}>
      <sphereGeometry args={[radi, 16, 16]} /> {/* Small sphere */}
      <meshBasicMaterial color={0xFF0000} />
    </mesh>
  );
});

function MovingLights({ onLightsReached }) {
  const lightRef = useRef();
  const light1Ref = useRef();
  const dot1Ref = useRef();
  const dot2Ref = useRef();

  // Define start and target positions
  const endPosition = ismobile ? new THREE.Vector3(-totalwidth * 0.5 * 0.52, totalheight * 0.5 * 0.72, 3) : new THREE.Vector3(-totalwidth * 0.5 * 0.32, totalheight * 0.5 * 0.8, 3);
  const endPosition1 = ismobile ? new THREE.Vector3(totalwidth * 0.5 * 0.345, totalheight * 0.5 * 0.62, 3) : new THREE.Vector3(totalwidth * 0.5 * 0.21, totalheight * 0.5 * 0.61, 3);

  const moveSpeed = 0.05; // Speed for moving lights
  const targetIntensity = 20; // Final intensity value
  const intensitySpeed = 0.04; // Speed for adjusting intensity
  const [lightsReached, setLightsReached] = useState(false);
  useFrame(() => {
    if (lightsReached) return;
    if (lightRef.current && light1Ref.current && dot1Ref.current && dot2Ref.current) {
      const light = lightRef.current;
      const light1 = light1Ref.current;
      const dot1 = dot1Ref.current;
      const dot2 = dot2Ref.current;
      dot1.position.copy(light.position);
      dot2.position.copy(light1.position);
      // Smoothly move lights to their respective positions
      if (light.position.distanceTo(endPosition) > 1) {
        light.position.lerp(endPosition, moveSpeed);
        light1.position.lerp(endPosition1, moveSpeed);
      } else {
        // Smoothly adjust intensity
        light.intensity = THREE.MathUtils.lerp(light.intensity, targetIntensity, intensitySpeed);
        light1.intensity = THREE.MathUtils.lerp(light1.intensity, targetIntensity, intensitySpeed);
        if (light.intensity > 16) {
          light.intensity=0;
          light1.intensity=0;

          setLightsReached(true);
          return;
        }
        if (light.intensity > 14) {
          //console.log("HERE");
          dot1.visible = false;
          dot2.visible = false;
          onLightsReached();
        }

      }
    }
  });


  return (
    <>
      <pointLight
        ref={lightRef}
        intensity={5}
        color="red"
        castShadow
        distance={5}
        position={[0, -3, 0]}
      />
      <pointLight
        ref={light1Ref}
        intensity={5}
        color="red"
        castShadow
        distance={5}
        position={[0, -3, 0]}
      />
      <RedDot position={[0, -3, 0]} ref={dot1Ref} />
      <RedDot position={[0, -3, 0]} ref={dot2Ref} radi={ismobile ? 0.1 : 0.23} />
    </>
  );
}

const FiberScene = () => {
  const cameraref = useRef();
  const mlight = useRef();
  const helplogo1 = useRef();
  const helplogo2 = useRef();
  const imageMeshRef = useRef();
  const groundref = useRef();
  const cleoleft = useRef();
  const cleoright = useRef();
  const helpright = useRef();
  const helpleft = useRef();
  const start=useRef();
  // const box = useRef();
  const paintBox = useRef();
  const navbarRef = useRef();
  const dotlight1 = useRef();
  const dotlight2 = useRef();
  const [displayNav, setDisplayNav] = useState(true);
  const light1Position = ismobile ? new THREE.Vector3(totalwidth * 0.17, totalheight * 0.5 * 0.3, 1) : new THREE.Vector3(-totalwidth * 0.5 * 0.25, totalheight * 0.5 * 0.27, 3);
  const light2Position = ismobile ? new THREE.Vector3(-totalwidth * 0.22, totalheight * 0.5 * 0.3, 2) : new THREE.Vector3(5, 3, 3);
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const [lightsReached, setLightsReached] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [AllowScroll,setAllowScroll] = useState(false);
  const newLogoTexturetexture = useLoader(THREE.TextureLoader, logo1); // Load texture
  const endPosition = ismobile ? new THREE.Vector3(-totalwidth * 0.5 * 0.52, totalheight * 0.5 * 0.72, 3) : new THREE.Vector3(-totalwidth * 0.5 * 0.32, totalheight * 0.5 * 0.8, 3);
  const endPosition1 = ismobile ? new THREE.Vector3(totalwidth * 0.5 * 0.345, totalheight * 0.5 * 0.62, 3) : new THREE.Vector3(totalwidth * 0.5 * 0.21, totalheight * 0.5 * 0.61, 3);
  
  const handleLightsReached = () => {
    setAllowScroll(true);
    console.log("Lights reached their final position");
    setLightsReached(true); // Update shared state
    setIsVisible(true);
    const l1 = helplogo1.current;
    const l2 = helplogo2.current;
    const targetIntensity = ismobile ? 3 : 20;

    const hl = helpleft.current;
    const hr = helpright.current;
    const dot1curr=dotlight1.current;
    const dot2curr=dotlight2.current;
    const hlTargetIntensity = ismobile ? 3 : 20;
    const dur = 3;
    if(dot1curr && dot2curr){
      dot1curr.intensity=20;
      dot2curr.intensity=20;
    }
    
    if (l1 && l2 && hl && hr) {
      // Use gsap to animate intensity
      gsap.to(l1, {
        intensity: targetIntensity,
        duration: dur, // 2 seconds for smooth transition
        ease: "power2.out",
      });
      gsap.to(l2, {
        intensity: targetIntensity,
        duration: dur,
        ease: "power2.out",
      });
      gsap.to(hl, {
        intensity: hlTargetIntensity,
        duration: dur,
        ease: "power2.out",
      });
      gsap.to(hr, {
        intensity: hlTargetIntensity,
        duration: dur,
        ease: "power2.out",
      });
    }

    // Update the image texture
    imageMeshRef.current.material.map = newLogoTexturetexture; // Update texture
    imageMeshRef.current.material.needsUpdate = true;
  };

  const [isAnimating,setisanimating] = useState(false);
  let startY = 0;
  let isTouchScrolling = false;

  const onTouchStart = (event) => {
    //console.log("Touched");
    if (event.touches && event.touches.length === 1) {
      startY = event.touches[0].clientY;
      isTouchScrolling = true;
    }
  };

  const onTouchMove = (event) => {
    //console.log("Touched1");
    if (isTouchScrolling) {
      const currentY = event.touches[0].clientY;
      const deltaY = startY - currentY;

      if (Math.abs(deltaY) > 10) {
        startY = currentY;
        onScroll({ type: "touch", deltaY });
      }
    }
  };

  const onTouchEnd = () => {
    isTouchScrolling = false;
  };

  // Add the touch event listeners
  window.addEventListener("touchstart", onTouchStart);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("touchend", onTouchEnd);
  var trial = false;

  const onScroll = (event) => {
    if (!AllowScroll) return;
    let deltaY = event.type === "click" ? 2 : -2;
    if(event.type==="wheel"){
      deltaY=event.deltaY;
    }
    const camera = cameraref.current;
    const ground = groundref.current;
    const c1 = cleoleft.current;
    const c2 = cleoright.current;
    const hl = helplogo1.current;
    const hr = helplogo2.current;
    const imagee = imageMeshRef.current;
    const paintBoxCurr = paintBox.current;
    const navbarCurr = navbarRef.current.ref1;
    const textdiv=navbarRef.current.ref2;
    const dot1curr=dotlight1.current;
    const dot2curr=dotlight2.current;
    // const content = box.current;
    console.log(textdiv);

    if (isAnimating || !camera || !ground || !c1 || !c2) return;
    if ((event.type==="click" || event.type === "wheel" || event.type === "touch") && camera && ground && c1 && c2 && dot1curr && dot2curr) {

      if ((deltaY > 0) && imagee.position.z < 10) {
        setIsVisible(false);
        setisanimating(true);
        trial = true;
        const timeline = gsap.timeline({
          defaults: { duration: 3, ease: "power4.inOut" },
          onComplete: () => {
            setDisplayNav(true);
            setisanimating(false);
          },
        });

        timeline
          .to(imagee.position, { z: 16 })
          .to(dot1curr.position, { z: 17 },"<")
          .to(dot2curr.position, { z: 17 },"<")
          .to(hl.position, { z: 17 }, "<")
          .to(hr.position, { z: 17 }, "<")
          .to(c1.position, { x: -totalwidth * 0.41 }, "-=1.5")
          .to(c2.position, { x: totalwidth * 0.41 }, "<")
          .to(paintBoxCurr.position, { z: 0 }, "<")
          .to(navbarCurr.position, { z: 3 }, "<")
          .to(textdiv, { height:'40px',width:'40px' }, "<")
          // .call(() => setDisplayNav(true))
      }
      else if (deltaY<0 && imagee.position.z > 1 && camera && ground && c1 && c1 && hl && hr && imagee) {
        setisanimating(false);
        trial = false;
        // setTimeout(() => setDisplayNav(false), 1000);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
        
          onComplete: () => {
            setIsVisible(true);
            setisanimating(false); // Unlock when animation completes
          },
        });

        timeline
          .to(c1.position, { x: -totalwidth })
          .to(c2.position, { x: totalwidth }, "<")
          .to(paintBoxCurr.position, { z: -30 }, "<")
          .to(navbarCurr.position, { z: -30 }, "<")
          .to(textdiv, { height:'10px',width:'10px' }, "<")
          .to(imagee.position, { z: 1 }, "<") // Animate camera  
          .to(dot1curr.position, { z: 2 }, "<") // Animate camera  
          .to(dot2curr.position, { z: 2 }, "<") // Animate camera  
          .to(hl.position, { z: 2 }, "<") // "<" means this starts at the same time as the previous animation
          .to(hr.position, { z: 2 }, "<")
          // .call(() => setDisplayNav(false)); // Hide Navbar after animation

      }
    }
    console.log(trial);
    //window.scrollTo(0,0,0);
  };

  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const camera = cameraref.current;
    const mouseLight = mlight.current;
    let targetPlaneZ;
    if (camera && mouseLight) {
      raycaster.setFromCamera(mouse, camera);
      targetPlaneZ = camera.position.z - 13;

    }
    const planeNormal = new THREE.Vector3(0, 0, -1);
    const plane = new THREE.Plane(planeNormal, targetPlaneZ);
    const intersectPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectPoint);

    if (intersectPoint && mouseLight) {
      mouseLight.position.copy(intersectPoint);
    }
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('wheel', onScroll);
  window.addEventListener('keydown', onscroll);

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
        <pointLight ref={helplogo1} intensity={0} position={[light1Position.x,light1Position.y,3]} color="red" castShadow distance={10}/>
        <pointLight ref={helplogo2} intensity={0} position={[light2Position.x,light2Position.y,3]} color="red" castShadow distance={10}/>
        
        <pointLight ref={helpleft} intensity={0} position={[-totalwidth*0.5+7,5,2]} color="beige" castShadow distance={40}/>
        <pointLight ref={helpright} intensity={0} position={[totalwidth*0.5-7,5,2]} color="beige" castShadow distance={40}/>
        <MovingLights onLightsReached={handleLightsReached}/>
        <pointLight ref={dotlight1} intensity={0} position={[endPosition.x,endPosition.y,3]} color="red" castShadow distance={20} />
        <pointLight ref={dotlight2} intensity={0} position={[endPosition1.x,endPosition1.y,3]} color="red" castShadow distance={20} />
        
        <Html ref={start} position={[-1, totalheight/17, 0]} distanceFactor={10}>
          <div className={`text-red-500 bg-transparent rounded-[5vh] ${ismobile? 'w-[50vw] h-[15vh]': 'w-[15vw] h-[15vh]'} text-center border-2 border-red-700 ${isVisible ? 'flex' : 'hidden'} items-center justify-center shadow-[0_0_10px_red,0_0_20px_red,0_0_10px_red] transition-shadow duration-300 ease-in-out hover:bg-red-700 hover:text-black text-[40px] font-bold`}>
            <button onClick={onScroll}>
              ENTER
            </button>
          </div>

        </Html>
        <ImageMesh ref={imageMeshRef}/>
        <Ground ref={groundref}/>
        <Loadimage img={cleodance} height={10} width={5} position={[-totalwidth,4,1]} ref={cleoleft}/>
        <Loadimage img={cleostand} height={10} width={5} position={[totalwidth,4,1]} ref={cleoright}/>
        {/* <ambientLight/> */}
        <pointLight ref={mlight} intensity={50} position={[0, 100, 0]} color="beige" castShadow distance={10} />

        <Navbar ref={navbarRef} displayNav={displayNav}/>
        {/* <OrbitControls/> */}
        <Model ref={paintBox} />
      </Canvas>
    </div>
  );
}

export default FiberScene;