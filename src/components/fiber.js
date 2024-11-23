import React, { useRef,useEffect,forwardRef,useState } from "react";
import { Canvas, useLoader ,useFrame} from "@react-three/fiber";
import * as THREE from "three";
import logo from "../images/Logos/Name Logo filled1.png";
import logo1 from "../images/Logos/Name Logo filled.png";
import { PerspectiveCamera } from "@react-three/drei";
import grnd from "../images/ground1.webp";
import cleodance from "../images/Dance.png"
import cleostand from "../images/Cleo1.png"
import gsap from 'gsap';
import { dot } from "three/webgpu";

const ismobile = window.innerWidth < 1024;
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

const RotatingBox = forwardRef((props,ref) => {

  // Animation loop for rotation
  React.useEffect(() => {
    let frameId;
    const rotateBox = () => {
      if (ref.current) {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
      }
      frameId = requestAnimationFrame(rotateBox);
    };
    rotateBox();

    return () => cancelAnimationFrame(frameId); // Cleanup
  }, []);

  return (
    <mesh ref={ref} position={[0,4,-30]}>
      <boxGeometry args={ismobile?[2,2,2]:[4, 4, 4]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
});

const ImageMesh = forwardRef((props,ref) => {
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

const Loadimage = forwardRef(({img,height,width,position}, ref) => {
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
const RedDot = forwardRef(({ position,radi=ismobile?0.15:0.3 }, ref) => {
  return (
    <mesh position={position} scale={[1, 1.8, 1]} ref={ref}>
      <sphereGeometry args={[radi, 16, 16]} /> {/* Small sphere */}
      <meshBasicMaterial color={0xF00000} />
    </mesh>
  );
});

function MovingLights({onLightsReached}) {
  const lightRef = useRef();
  const light1Ref = useRef();
  const dot1Ref = useRef();
  const dot2Ref = useRef();

  // Define start and target positions
  const endPosition = ismobile?new THREE.Vector3(-totalwidth*0.5*0.52,totalheight*0.5*0.72, 3):new THREE.Vector3(-totalwidth*0.5*0.32,totalheight*0.5*0.8, 3);
  const endPosition1 = ismobile?new THREE.Vector3(totalwidth*0.5*0.345,totalheight*0.5*0.62, 3):new THREE.Vector3(totalwidth*0.5*0.21,totalheight*0.5*0.61,3);

  const moveSpeed = 0.02; // Speed for moving lights
  const targetIntensity = 20; // Final intensity value
  const intensitySpeed = 0.04; // Speed for adjusting intensity
  const [lightsReached, setLightsReached] = useState(false);
  useFrame(() => {
    if (lightsReached) return;
    if (lightRef.current && light1Ref.current && dot1Ref.current && dot2Ref.current) {
      const light = lightRef.current;
      const light1 = light1Ref.current;
      const dot1=dot1Ref.current;
      const dot2=dot2Ref.current;
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
        if(light.intensity>19){
          setLightsReached(true);
        }
        if(light.intensity>14){
          //console.log("HERE");
          dot1.visible=false;
          dot2.visible=false;
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
        position={[0,-3,0]}
      />
      <pointLight
        ref={light1Ref}
        intensity={5}
        color="red"
        castShadow
        distance={5}
        position={[0,-3,0]}
      />
      <RedDot position={[0,-3,0]} ref={dot1Ref}/>
      <RedDot position={[0,-3,0]} ref={dot2Ref} radi={ismobile?0.1:0.23}/>
    </>
  );
}

const App = () => {
    const cameraref=useRef();
    const mlight=useRef();
    const help1=useRef();
    const help2=useRef();
    const imageMeshRef=useRef();
    const groundref=useRef();
    const cleoleft=useRef();
    const cleoright=useRef();
    const helpright=useRef();
    const helpleft=useRef();
    const box=useRef()
    const light1Position = ismobile?new THREE.Vector3(totalwidth*0.17,totalheight*0.5*0.3, 1):new THREE.Vector3(-totalwidth*0.5*0.25,totalheight*0.5*0.27, 3);
    const light2Position =ismobile?new THREE.Vector3(-totalwidth*0.22, totalheight*0.5*0.3, 2):new THREE.Vector3(5,3, 3);
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const [lightsReached, setLightsReached] = useState(false);
    
    const newLogoTexturetexture = useLoader(THREE.TextureLoader, logo1); // Load texture
    const handleLightsReached = () => {
      console.log("Lights reached their final position");
      setLightsReached(true); // Update shared state
      const l1=help1.current;
      const l2=help2.current;
      const targetIntensity=20;
      l1.intensity=ismobile?10:20;
      l2.intensity=ismobile?10:20;
      helpleft.current.intensity=ismobile?10:40;
      helpright.current.intensity=ismobile?10:40;
      imageMeshRef.current.material.map = newLogoTexturetexture; // Update texture
      imageMeshRef.current.material.needsUpdate = true;
    };
    let isAnimating=false;
    const onScroll = (event) => {
      console.log(event.key);
      const scrollAmount = 0.05; 
      const camera=cameraref.current;
      const ground=groundref.current;
      const c1=cleoleft.current;
      const c2=cleoright.current;
      const hl=help1.current;
      const hr=help1.current;
      const imagee=imageMeshRef.current;
      const content=box.current;
      if (isAnimating || !camera || !ground || !c1 || !c2) return;
      if(event.type==="wheel" && camera && ground && c1 && c2){
        if (event.deltaY > 0 && imagee.position.z<10) {
          isAnimating = true;
          // if(box.current){
          //   box.current.visible=true;
          // }
          const timeline = gsap.timeline({
            defaults: { duration: 3, ease: "power4.inOut" },
            onComplete: () => {
              isAnimating = false; // Unlock when animation completes
            },
          });

          timeline
            .to(imagee.position, { z: 16 }) // Animate camera
            .to(hl.position, { z:17 }, "<") // "<" means this starts at the same time as the previous animation
            .to(hr.position, { z: 17}, "<") // Synchronized with previous
            .to(c1.position,{x:-totalwidth*0.41},"-=1.5")
            .to(c2.position,{x:totalwidth*0.41},"<")
            .to(content.position,{z:1},"<")
          // light1.position.z-=scrollAmount;
          // helpright.position.z-=scrollAmount;
          // helpleft.position.z-=scrollAmount;
          // light.position.z-=scrollAmount;
          
        } 
        else if(imagee.position.z>1 && camera && ground){
          isAnimating = true;
          const timeline = gsap.timeline({
            defaults: { duration: 3, ease: "power4.inOut" },
            onComplete: () => {
              isAnimating = false; // Unlock when animation completes
            },
          });

          timeline
          .to(c1.position,{x:-totalwidth})
          .to(c2.position,{x:totalwidth},"<")
          .to(content.position,{z:-30},"<")
          .to(imagee.position, { z:1  },"-0.7") // Animate camera
          .to(hl.position, { z:2 }, "<") // "<" means this starts at the same time as the previous animation
          .to(hr.position, { z: 2}, "<")
          
          // camera.position.z += scrollAmount;
          // ground.position.z += scrollAmount;
          // c1.position.z+=scrollAmount;
          // c2.position.z+=scrollAmount;
          // hl.position.z+=scrollAmount;
          // hr.position.z+=scrollAmount;
          
          // light1.position.z+=scrollAmount;
          // helpright.position.z+=scrollAmount;
          // helpleft.position.z+=scrollAmount;
          // light.position.z+=scrollAmount;
        }
    }
    else if(camera && ground && c1 && c2){
      console.log("HEREE");
      if (event.key === 'ArrowUp' && camera.position.z<15) {
        camera.position.z += scrollAmount; // Scroll forward
        ground.position.z += scrollAmount;
        c1.position.z+=scrollAmount;
        c2.position.z+=scrollAmount;
        hl.position.z+=scrollAmount;
        hr.position.z+=scrollAmount;
          
          
      } else if (event.key === 'ArrowDown') {
        camera.position.z -= scrollAmount; // Scroll backward
        ground.position.z-=scrollAmount;
        c1.position.z-=scrollAmount;
        c2.position.z-=scrollAmount;
        hl.position.z-=scrollAmount;
        hr.position.z-=scrollAmount;
          
      }
    }
      //window.scrollTo(0,0,0);
    };
  
    const onMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        const camera=cameraref.current;
        const mouseLight=mlight.current;
        let targetPlaneZ;
        if(camera && mouseLight){
          raycaster.setFromCamera(mouse, camera);
          targetPlaneZ=camera.position.z-13;
        
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
        <pointLight ref={help1} intensity={0} position={light1Position} color="red" castShadow distance={20}/>
        <pointLight ref={help2} intensity={0} position={light2Position} color="red" castShadow distance={20}/>
        <pointLight ref={helpleft} intensity={0} position={[-totalwidth*0.5+7,5,2]} color="beige" castShadow distance={40}/>
        <pointLight ref={helpright} intensity={0} position={[totalwidth*0.5-7,5,2]} color="beige" castShadow distance={40}/>
        <MovingLights onLightsReached={handleLightsReached}/>
        <pointLight ref={mlight} intensity={50} position={[0,100,0]} color="beige" castShadow distance={10}/>

        {/* <RedDot position={light1Position} />
        <RedDot position={light2Position} /> */}
        <ImageMesh ref={imageMeshRef}/>
        <Ground ref={groundref}/>
        <Loadimage img={cleodance} height={10} width={5} position={[-totalwidth,4,1]} ref={cleoleft}/>
        <Loadimage img={cleostand} height={10} width={5} position={[totalwidth,4,1]} ref={cleoright}/>
        <RotatingBox ref={box}/>
      </Canvas>
    </div>
  );
};

export default App;




