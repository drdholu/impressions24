import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import logo from "../images/Logos/Name Logo filled1.png";
import logo1 from "../images/Logos/Name Logo filled.png";
import React, { useRef, useEffect, forwardRef, useState, useImperativeHandle } from "react";
import { PerspectiveCamera, Html, useGLTF, OrbitControls,RectAreaLight } from "@react-three/drei";
import grnd from "../images/ground1.webp";
// import cleodance from "../images/Cleo/Dance.png"
// import cleostand from "../images/Cleo/Shoutout.png"
import cleoANC from '../images/Cleo/AnC.png'
import cleoCam from '../images/Cleo/Camera.png'
import cleoMain from '../images/Cleo/Cleo.png'
import cleoDance from '../images/Cleo/Dance.png'
import cleoMusic from '../images/Cleo/Music.png'
import cleoShoutout from '../images/Cleo/Shoutout.png'
import cleoAbhinay from '../images/Cleo/abhinay.png'
import gsap from 'gsap';
import { atom } from "jotai";
import { AmbientLight } from 'three'
import InProgress from "./ui/InProgress";
import dat from 'dat.gui';

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
    // onPointerOver={() => {
    //   setIsHovered(true);
    //   document.body.style.cursor = "custom";
    // }}
    // onPointerOut={() => {
    //   setIsHovered(false);
    //   document.body.style.cursor = "auto";
    // }}
    // className={`paintbox ${isHovered ? "cursor-custom" : "cursor-auto"}`}
  />
    
  )
});

const Navbar = forwardRef(({ displayNav }, ref) => {
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
    { url: '/team', name: "Team", position: [0.5, 1.25, 2], className: "", ref: ref2 },
    { url: '/events', name: "Events", position: [-2.15, 1.65, 2], className: "", ref: ref3 },
    { url: '/sponsors', name: "Sponsors", position: [-3, 3, 3], className: "", ref: ref4 },
    { url: '/showflow', name: "Showflow", position: [-1.75, 4.15, 1.5], className: "", ref: ref5 },
    { url: '/proshow', name: "Proshows", position: [-0.15, 4.15, 1.5], className: "", ref: ref6 },
    { url: '/about', name: "About", position: [1.5, 4.15, 1.5], className: "", ref: ref7 },
    { url: '/contact', name: "Contact", position: [3, 3.75, 1.5], className: "", ref: ref8 },
  ]

  // Create an array of refs
  // const refs = useRef(items.map(() => React.createRef()));

  // Expose refs via `useImperativeHandle`
  // useImperativeHandle(ref, () => {
  //   return refs.current.reduce((acc, currentRef, idx) => {
  //     acc[`ref${idx + 1}`] = currentRef.current;
  //     return acc;
  //   }, {});
  // });
  return (
    <mesh ref={ref1} position={[0, 0, -15]}>
      {items.map((item, idx) => {
        return (
          <Html transform occlude={true} rotation={[-19.8, 0, 0]} position={item.position}>
            <div onMouseEnter={() => setHoveredItem(idx)} onMouseLeave={() => setHoveredItem(null)} ref={item.ref} className={`
              transition-all duration-300 ease-in-out
              ${displayNav ? "opacity-100 scale-100" : "opacity-0 scale-50"}
              ${item.className}
              text-xs font-bold
              flex justify-center items-center
              w-12 h-12 
              rounded-full 
              border-2 border-white/30
              shadow-lg shadow-black/50
              hover:scale-110 hover:brightness-110
              cursor-pointer
              text-white
              bg-black/20
              backdrop-blur-3xl
              transform`}>

              {/* {hoveredItem === idx && (
                <mesh>
                  <div
                    className="absolute z-50 
                    -top-24 left-1/2 transform -translate-x-1/2
                    w-64 
                    bg-white/90 
                    text-black 
                    p-4 
                    shadow-lg
                    before:content-[''] 
                    before:absolute 
                    before:bottom-[-10px] 
                    before:left-1/2 
                    before:transform 
                    before:-translate-x-1/2 
                    before:border-l-8 
                    before:border-r-8 
                    before:border-t-8 
                    before:border-l-transparent 
                    before:border-r-transparent 
                    before:border-t-white/90
                    animate-fade-in-up
                  "
                  >
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </mesh>
              )} */}
              <a href={item.url}>{item.name}</a>

            </div>
          </Html>
        )
      })}
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

const Loadimage = forwardRef(({ img, height, width, position,rotation,visible }, ref) => {
  const texture = useLoader(THREE.TextureLoader, img); // Load texture

  return (
    <mesh
      ref={ref}
      position={position}
      castShadow
      receiveShadow
      rotation={rotation}
      visible={visible}
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
          light.intensity = 0;
          light1.intensity = 0;

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

const LightPointer = forwardRef(({ position = [0, 0, 16], targetPos }, ref) => {
  useFrame(() => {
    if (ref.current && targetPos) {
      ref.current.position.lerp(targetPos, 0.15);
      
      // Add subtle hover movement
      const time = Date.now() * 0.001;
      ref.current.position.y += Math.sin(time * 2) * 0.002;
    }
  });

  return (
    <group ref={ref}>
      {/* <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={0xffffff} transparent opacity={0.6} />
      </mesh> */}
      <pointLight
        intensity={0}
        distance={8}
        decay={2}
        color="white"
      />
    </group>
  );
});

const Landing = () => {
  const cameraref = useRef();
  const mlight = useRef();
  const helplogo1 = useRef();
  const helplogo2 = useRef();
  const imageMeshRef = useRef();
  const groundref = useRef();
  const cleoleft1 = useRef();
  const cleoleft2 = useRef();
  const cleoright1 = useRef();
  const cleoright2 = useRef();
  const cleoMain1 = useRef();
  const themeRef = useRef();
  const helpright = useRef();
  const lamp1=useRef();
  const lamp2=useRef();
  const lamplight1=useRef();
  const lamplight2=useRef();
  const helpleft = useRef();
  const start = useRef();
  const back = useRef();
  const cleol1=useRef();
  const cleor1=useRef();
  const cleol2=useRef();
  const cleor2=useRef();
  const Treer=useRef();
  const Treel=useRef();
  const paintboxlight=useRef();
  // const box = useRef();
  const paintBox = useRef();
  const navbarRef = useRef();
  const dotlight1 = useRef();
  const dotlight2 = useRef();
  const rectAreLightref = useRef();
  const temp=useRef();
  const [displayNav, setDisplayNav] = useState(true);
  const light1Position = ismobile ? new THREE.Vector3(totalwidth * 0.17, totalheight * 0.5 * 0.3, 1) : new THREE.Vector3(-totalwidth * 0.5 * 0.25, totalheight * 0.5 * 0.27, 3);
  const light2Position = ismobile ? new THREE.Vector3(-totalwidth * 0.22, totalheight * 0.5 * 0.3, 2) : new THREE.Vector3(5, 3, 3);
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const [lightsReached, setLightsReached] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [AllowScroll, setAllowScroll] = useState(false);
  const lightPointerRef = useRef();
  const lightTargetPos = useRef(new THREE.Vector3());
  const lerpSpeed = 0.15;
  const newLogoTexturetexture = useLoader(THREE.TextureLoader, logo1); // Load texture
  const endPosition = ismobile ? new THREE.Vector3(-totalwidth * 0.5 * 0.52, totalheight * 0.5 * 0.72, 3) : new THREE.Vector3(-totalwidth * 0.5 * 0.32, totalheight * 0.5 * 0.8, 3);
  const endPosition1 = ismobile ? new THREE.Vector3(totalwidth * 0.5 * 0.345, totalheight * 0.5 * 0.62, 3) : new THREE.Vector3(totalwidth * 0.5 * 0.21, totalheight * 0.5 * 0.61, 3);

  console.log(lightsReached);
  const handleLightsReached = () => {
    setAllowScroll(true);
    console.log("Lights reached their final position");
    setLightsReached(true); // Update shared state
    setIsVisible(true);
    const l1 = helplogo1.current;
    const l2 = helplogo2.current;
    const targetIntensity = ismobile ? 3 : 0;
    
    const hl = helpleft.current;
    const hr = helpright.current;
    const dot1curr = dotlight1.current;
    const dot2curr = dotlight2.current;
    const hlTargetIntensity = ismobile ? 3 : 0;
    const dur = 3;

    lightPointerRef.current.children[0].intensity = 40;
    if (dot1curr && dot2curr) {
      dot1curr.intensity = 20;
      dot2curr.intensity = 20;
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
      
    }

    // Update the image texture
    imageMeshRef.current.material.map = newLogoTexturetexture; // Update texture
    imageMeshRef.current.material.needsUpdate = true;
  };
 
  const [isAnimating, setisanimating] = useState(false);
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
  window.addEventListener("touchstart", onscroll);
  window.addEventListener("touchmove", onscroll);
  window.addEventListener("touchend", onscroll);
  var trial = false;

  const onScroll = (event) => {
    
    if (!AllowScroll) return;
    let deltaY = event.type === "click" ? 2 : -2;
    if (event.type === "wheel") {
      deltaY = event.deltaY;
    }
    const lmp1=lamplight1.current;
    const lmp2=lamplight2.current;
    const camera = cameraref.current;
    const ground = groundref.current;
    const c1 = cleoleft1.current;
    const cL2 = cleoleft2.current;
    const c2 = cleoright1.current;
    const cR2 = cleoright2.current;
    const hl = helpleft.current;
    const hr = helpright.current;
    const themeRefCurr = themeRef.current;
    const imagee = imageMeshRef.current;
    const paintBoxCurr = paintBox.current;
    const navbarCurr = navbarRef.current.ref1;
    const textdiv = navbarRef.current.ref2;
    const dot1curr = dotlight1.current;
    const dot2curr = dotlight2.current;
    const paintlightcurr=paintboxlight.current;
    const cleol1curr=cleol1.current;
    const cleor1curr=cleor1.current;
    const cleol2curr=cleol2.current;
    const cleor2curr=cleor2.current;
    
    // const content = box.current;
    // console.log(textdiv);
    console.log(c1);
    if (isAnimating || !camera || !ground || !c1 || !c2) return;
    
    if ((event.type === "click" || event.type === "wheel" || event.type === "touch") && camera && ground && c1 && c2 && dot1curr && dot2curr) {
      
      if (camera.position.z>10) {
        lightPointerRef.current.children[0].intensity = 0;
        setIsVisible(false);
        setisanimating(true);
        const cleointensity=ismobile?10:25;
        trial = true;
        lightPointerRef.current.children[0].intensity=0;
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },
          onComplete: () => {
            setDisplayNav(true);
            setisanimating(false);
            lightPointerRef.current.children[0].intensity = 20;
          },
        });

        timeline
          // .to(imagee.position, { z: 16 })
          // .to(dot1curr.position, { z: 17 }, "<")
          // .to(dot2curr.position, { z: 17 }, "<")
          
          
          // .to(paintBoxCurr.position, { z: 0 }, "<")
          // .to(navbarCurr.position, { z: 3 }, "<")
          // .to(textdiv, { height: '40px', width: '40px' }, "<")
          
          .to(camera.position,{z:0})
          .to(c1.position, { x: -totalwidth * 0.41 }, "<")
          .to(c2.position, { x: totalwidth * 0.41 }, "<")
          // .to(themeRefCurr.position, {y: 18})
          .to(hl, { intensity: 17 },"<")
          .to(hr, { intensity: 17 }, "<")
          .to(cleol1curr, { intensity: cleointensity }, "<")
          .to(cleol2curr, { intensity: cleointensity }, "<")
          .to(cleor1curr, { intensity: cleointensity }, "<")
          .to(cleor2curr, { intensity: cleointensity }, "<")
          .to(paintlightcurr, { intensity: 17 }, "<")
          .to(lmp1, { intensity: 60 }, "<")
          .to(lmp2, { intensity: 60 }, "<")
          .to(themeRefCurr.children[0], {opacity : 1 }, "-=1")
          
        // .call(() => setDisplayNav(true))
      }
      else if (camera.position.z<10) {
        lightPointerRef.current.children[0].intensity = 0;
        setisanimating(false);
        trial = false;
        // setTimeout(() => setDisplayNav(false), 1000);
        const timeline = gsap.timeline({
          defaults: { duration: 2.5, ease: "power4.inOut" },

          onComplete: () => {
            lightPointerRef.current.children[0].intensity = 40;
            setIsVisible(true);
            setisanimating(false); // Unlock when animation completes
          },
        });

        timeline
          .to(c1.position, { x: -totalwidth })
          .to(c2.position, { x: totalwidth }, "<")
          // .to(themeRefCurr.position, {y: 100}, "<")
          .to(hl, { intensity: 0 },"<")
          .to(hr, { intensity: 0 }, "<")
          .to(cleol1curr, { intensity: 0 }, "<")
          .to(cleol2curr, { intensity: 0 }, "<")
          .to(cleor1curr, { intensity: 0 }, "<")
          .to(cleor2curr, { intensity: 0 }, "<")
          .to(paintlightcurr, { intensity: 0 }, "<")
          .to(lmp1, { intensity: 0 }, "<")
          .to(lmp2, { intensity: 0 }, "<")
          .to(themeRefCurr.children[0], {opacity : 0 }, "<")
          // .to(paintBoxCurr.position, { z: -30 }, "<")
          // .to(navbarCurr.position, { z: -30 }, "<")
          // .to(textdiv, { height: '10px', width: '10px' }, "<")
          // .to(imagee.position, { z: 1 }, "<") // Animate camera  
          // .to(dot1curr.position, { z: 2 }, "<") // Animate camera  
          // .to(dot2curr.position, { z: 2 }, "<") // Animate camera  
          // .to(hl.position, { z: 2 }, "<") // "<" means this starts at the same time as the previous animation
          // .to(hr.position, { z: 2 }, "<")
          .to(camera.position,{z:15},"<")
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
    
    if (camera && lightPointerRef.current) {
      raycaster.setFromCamera(mouse, camera);
      const targetPlaneZ = camera.position.z - 13;
      const planeNormal = new THREE.Vector3(0, 0, -1);
      const plane = new THREE.Plane(planeNormal, targetPlaneZ);
      const intersectPoint = new THREE.Vector3();
      
      if (raycaster.ray.intersectPlane(plane, intersectPoint)) {
        lightTargetPos.current.copy(intersectPoint);
        
        // Dynamic color based on position
        const color = new THREE.Color(0xffffff);
        
        if (lightPointerRef.current) {
          lightPointerRef.current.children[0].color = color;
        }
      }
    }
  };

  window.addEventListener('mousemove', onMouseMove);

  useEffect(() => {
    const gui = new dat.GUI();

    const lightOptions = {
      helplogo1_intensity: 0,
      helplogo2_intensity: 0,
      helpleft_intensity: 0,
      helpright_intensity: 0,
      cleol1_intensity: 0,
      cleol2_intensity: 0,
      cleor1_intensity: 0,
      cleor2_intensity: 0,
      lamplight1_intensity: 0,
      lamplight2_intensity: 0,
      paintboxlight_intensity: 0,
      rectAreLightref_intensity: 0, // Added property
      rectAreaLight_width: 4,        // Added property
      rectAreaLight_height: 12,      // Added property
      rectAreaLight_r: 255,          // Added property
      rectAreaLight_g: 192,          // Added property
      rectAreaLight_b: 203,          // Added property
    };

    gui.add(lightOptions, 'helplogo1_intensity', 0, 20).onChange((value) => {
      if (helplogo1.current) helplogo1.current.intensity = value;
    });
    gui.add(lightOptions, 'helplogo2_intensity', 0, 20).onChange((value) => {
      if (helplogo2.current) helplogo2.current.intensity = value;
    });
    gui.add(lightOptions, 'helpleft_intensity', 0, 40).onChange((value) => {
      if (helpleft.current) helpleft.current.intensity = value;
    });
    gui.add(lightOptions, 'helpright_intensity', 0, 40).onChange((value) => {
      if (helpright.current) helpright.current.intensity = value;
    });
    gui.add(lightOptions, 'cleol1_intensity', 0, 60).onChange((value) => {
      if (cleol1.current) cleol1.current.intensity = value;
    });
    gui.add(lightOptions, 'cleol2_intensity', 0, 40).onChange((value) => {
      if (cleol2.current) cleol2.current.intensity = value;
    });
    gui.add(lightOptions, 'cleor1_intensity', 0, 60).onChange((value) => {
      if (cleor1.current) cleor1.current.intensity = value;
    });
    gui.add(lightOptions, 'cleor2_intensity', 0, 40).onChange((value) => {
      if (cleor2.current) cleor2.current.intensity = value;
    });
    gui.add(lightOptions, 'lamplight1_intensity', 0, 60).onChange((value) => {
      if (lamplight1.current) lamplight1.current.intensity = value;
    });
    gui.add(lightOptions, 'lamplight2_intensity', 0, 60).onChange((value) => {
      if (lamplight2.current) lamplight2.current.intensity = value;
    });
    gui.add(lightOptions, 'paintboxlight_intensity', 0, 40).onChange((value) => {
      if (paintboxlight.current) paintboxlight.current.intensity = value;
    });
    gui.add(lightOptions, 'rectAreLightref_intensity', 0, 40).onChange((value) => {
      if (rectAreLightref.current) rectAreLightref.current.intensity = value; // Corrected reference
    });
    gui.add(lightOptions, 'rectAreaLight_width', 1, 20).onChange((value) => {
      if (rectAreLightref.current) rectAreLightref.current.width = value;
    });
    gui.add(lightOptions, 'rectAreaLight_height', 1, 20).onChange((value) => {
      if (rectAreLightref.current) rectAreLightref.current.height = value;
    });
    gui.add(lightOptions, 'rectAreaLight_r', 0, 255).onChange((value) => {
      if (rectAreLightref.current) {
        const currentColor = rectAreLightref.current.color;
        rectAreLightref.current.color.setRGB(value / 255, currentColor.g, currentColor.b);
      }
    });
    gui.add(lightOptions, 'rectAreaLight_g', 0, 255).onChange((value) => {
      if (rectAreLightref.current) {
        const currentColor = rectAreLightref.current.color;
        rectAreLightref.current.color.setRGB(currentColor.r, value / 255, currentColor.b);
      }
    });
    gui.add(lightOptions, 'rectAreaLight_b', 0, 255).onChange((value) => {
      if (rectAreLightref.current) {
        const currentColor = rectAreLightref.current.color;
        rectAreLightref.current.color.setRGB(currentColor.r, currentColor.g, value / 255);
      }
    });

    // Position the GUI to be visible
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '0px';
    gui.domElement.style.right = '0px';
    gui.domElement.style.zIndex = '1000'; // Ensure it's above other elements

    return () => {
      gui.destroy();
    };
  }, []);

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
        <pointLight ref={helplogo1} intensity={0} position={[light1Position.x, light1Position.y, 3]} color="red" castShadow distance={10} />
        <pointLight ref={helplogo2} intensity={0} position={[light2Position.x, light2Position.y, 3]} color="red" castShadow distance={10} />

        <pointLight ref={helpleft} intensity={0} position={[-totalwidth * 0.5 + 7, 5, -14]} color="beige" castShadow distance={40} />
        <pointLight ref={helpright} intensity={0} position={[totalwidth * 0.5 - 7, 5, -14]} color="beige" castShadow distance={40} />
        <pointLight ref={cleol1} intensity={0} position={[-totalwidth*0.2, 9, -16]} color="whte" castShadow distance={60} />
        <pointLight ref={cleol2} intensity={0} position={[-totalwidth * 0.4, 7, -16]} color="beige" castShadow distance={40} />
        <pointLight ref={cleor1} intensity={0} position={[totalwidth * 0.2, 7, -15]} color="white" castShadow distance={60} />
        <pointLight ref={cleor2} intensity={0} position={[totalwidth * 0.4, 7, -18]} color="beige" castShadow distance={40} />
        <pointLight ref={lamplight1} intensity={0} position={[-20,10,-20]} color="yellow" castShadow distance={40} />
        <pointLight ref={lamplight2} intensity={0} position={[20,10,-20]} color="yellow" castShadow distance={40} />
        <pointLight ref={paintboxlight} intensity={0} position={[0,7,-14]} color="beige" castShadow distance={40} />
        <MovingLights onLightsReached={handleLightsReached} />
        <pointLight ref={dotlight1} intensity={0} position={[endPosition.x, endPosition.y, 3]} color="red" castShadow distance={20} />
        <pointLight ref={dotlight2} intensity={0} position={[endPosition1.x, endPosition1.y, 3]} color="red" castShadow distance={20} />
        <pointLight ref={dotlight2} intensity={0} position={[endPosition1.x, endPosition1.y, 3]} color="red" castShadow distance={20} />
        {/* <pointLight  intensity={20} position={[-14,12,2]} color="pink" castShadow distance={20} />
        <pointLight  intensity={20} position={[-16,3,1]} color="pink" castShadow distance={20} /> */}
        
        <rectAreaLight ref={rectAreLightref} intensity={20} position={[0,12,45]} color="pink" castShadow width={4} height={12} />
        {/* <pointLight  intensity={20} position={[14,3,1]} color="pink" castShadow distance={20} /> */}
        {/* enter button */}
        <Html ref={start} position={[-1.5, totalheight/ 17, 0]} distanceFactor={10}>
          <div className={`
          ${ismobile ? 'w-[50vw] h-[15vh]' : 'w-[15vw] h-[15vh]'} 
            ${isVisible ? 'flex' : 'hidden'}
            bg-transparent 
            items-center 
            justify-center 
            transition-all 
            duration-300  
            ease-in-out 
            group
          `}>
            <button
              onClick={onScroll}
              className={`
                w-full h-full
                relative 
                px-8 
                py-4 
                text-[40px] 
                font-bold 
                text-red-500 
                overflow-hidden 
                group-hover:text-black 
                transition-colors 
                duration-300 
                z-10
                before:content-[''] 
                before:absolute 
                before:left-0 
                before:top-0 
                before:w-full 
                before:h-full 
                before:bg-red-700 
                before:origin-bottom-right 
                before:scale-x-0 
                before:transition-transform 
                before:duration-300 
                before:ease-in-out 
                before:z-[-1] 
                group-hover:before:origin-bottom-left 
                group-hover:before:scale-x-100 
                flex 
                items-center 
                justify-center 
                rounded-[5vh] 
                shadow-[0_0_10px_red,0_0_20px_red,0_0_10px_red] 
                hover:shadow-[0_0_20px_red,0_0_30px_red,0_0_20px_red]
              `}>
              ENTER
            </button>
          </div>
        </Html>
        <Html transform occlude={true} ref={back} position={[-1, totalheight*0.13, -15]} rotation={[-19.8, 0, 0]} distanceFactor={10}>
          <div className={`
          ${ismobile ? 'w-[20vw] h-[10vh]' : 'w-[10vw] h-[10vh]'} 
            ${!isVisible ? 'flex' : 'hidden'}
            bg-transparent 
            items-center 
            justify-center 
            transition-all 
            duration-300 
            ease-in-out 
            group
          `}>
            <button
              onClick={onScroll}
              className={`transition-all duration-300 ease-in-out
                flex justify-center items-center
                ${ismobile ? 'w-[15vw] h-[8vh]' : 'w-[4vw] h-[8vh]'} 
                rounded-full 
                border-2 border-white/30
                shadow-lg shadow-black/50
                hover:scale-110 hover:brightness-110
                text-white
                bg-black/20
                transform`}>
              BACK
            </button>
          </div>
        </Html>
        

        <ImageMesh ref={imageMeshRef} />
        <Ground ref={groundref} />

        {/* Cleo Images */}
        {/* <Loadimage img={cleoANC} rotation={[0, 1.5, 0]} height={10} width={10} position={[-totalwidth, 4, -15]} /> */}
        <Loadimage img={cleoCam} rotation={[0, 0, 0]} height={10} width={10} position={[-totalwidth, 4, -21]} ref={cleoleft1}/>
        <Loadimage img={cleoAbhinay} rotation={[0, 0, 0]} height={10} width={10} position={[totalwidth, 5, -21]} ref={cleoright1}/>
        <Loadimage img={cleoMain} rotation={[0, 0, 0]} height={10} width={10} position={[0, 4, -19]}/>
        <Loadimage img={cleoShoutout} rotation={[0, 0.5, 0]} height={10} width={10} position={[-totalwidth/5, 4, -20]}ref={cleoleft2} visible={ismobile?false:true}/>
        <Loadimage img={cleoDance} rotation={[0, -0.5, 0]} height={10} width={10} position={[totalwidth/5, 4, -20]} ref={cleoright2} visible={ismobile?false:true}/>
        
        {/* Rangrez */}
        <Html transform occlude={true} position={[0, 12, -15]} ref={themeRef} rotation={[0,0,0]}>
          <div className="flex flex-col items-center justify-center font-hindi text-white h-[30vh] w-[50vw] opacity-0">
            <div className="text-[13vw]">
              RANGREZ
            </div>
            <div className="text-[3vh]">
              The Artist Within
            </div>
          </div>
        </Html>
        {/* <ambientLight /> */}
        <LightPointer ref={lightPointerRef} targetPos={lightTargetPos.current} />
        <Navbar ref={navbarRef} displayNav={displayNav} />
        {/* <OrbitControls/> */}
        <Model ref={paintBox} rotation={[0.4, 9, 0]} position={[0, 3, -17]} scale={[110, 110, 110]} url={"models/palette.glb"} />
        <Model ref={lamp1} rotation={[0, -5, 0]} position={ismobile?[-totalwidth*0.6,0,-18]:[-25, 0, -20]} scale={ismobile?[2 ,5, 3]:[4, 5, 5]} url={"models/Post Lantern.glb"} />
        <Model ref={lamp2} rotation={[0, 5, 0]} position={ismobile?[totalwidth*0.6,0,-18]:[25, 0, -20]} scale={ismobile?[2 ,5, 3]:[4, 5, 5]} url={"models/Post Lantern.glb"} />
        <Model ref={Treer} rotation={[0, -19, 0]} position={ismobile?[totalwidth*0.6,0,-18]:[14, 0, 0]} scale={ismobile?[2 ,5, 3]:[0.1, 0.1, 0.1]} url={"models/Tree.glb"} />
        <Model ref={Treel} rotation={[0, 22, 0]} position={ismobile?[totalwidth*0.6,0,-18]:[-17, 0, 2]} scale={ismobile?[2 ,5, 3]:[0.1, 0.1, 0.1]} url={"models/Tree.glb"} />
 </Canvas>

    </div>
  );
}

export default Landing;