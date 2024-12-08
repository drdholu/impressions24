// src/ThreeScene.js
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import Memories from './Memories';
// import Events from './Events';
// import AboutUs from './AboutUs';
import logo from '../images/Logos/Name Logo filled1.png';
import logo1 from '../images/Logos/Name Logo filled.png';
import grnd from '../images/ground1.webp';
import cdance from '../images/Dance.png'
import cstand from '../images/Cleo1.png'
import { AbsoluteCenter } from '@chakra-ui/react';
// import Events from '../components/Events'

const SimpleBox = ({boxup}) => {
  return (
    <div 
      className={`${boxup ? 'block' : 'hidden'} flex items-center justify-center w-10 h-10 bg-red`}
    >
      hello
    </div>
  )
}


const ThreeScene = () => {
  const mountRef = useRef(null);
  const mouseLightRef = useRef(null);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const imageMeshRef = useRef(null);
  const cleoref=useRef(null);
  const w =window.innerWidth;
  const h =window.innerHeight;
  const scalefact=window.innerWidth/1300;
  const ismobile=window.innerWidth<1024;
  var boxup=false;
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background=new THREE.Color('#000000')

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    const createLight = (color, intensity, position,reach) => {
      const light = new THREE.PointLight(color, intensity, reach);
      light.castShadow = true;
      light.position.set(...position);
      scene.add(light);
      return light;
    };
    const updateImageSize = (camera, imageMesh, screenHeightPercentage, screenWidthPercentage) => {
      // console.log("Calculating new image size");
    
      
      const fov = camera.fov; 
      const distance = camera.position.z-imageMesh.position.z;
      const aspectRatio = window.innerWidth / window.innerHeight;
      
      
      const verticalFOVInRadians = (fov * Math.PI) / 180;
      
      
      const horizontalFOV = 2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);
      
      
      const worldWidth = ismobile?2 * Math.tan(horizontalFOV / 2) * distance*0.7:2 * Math.tan(horizontalFOV / 2) * distance*0.5;
      const totalwidth=2 * Math.tan(horizontalFOV / 2) * distance;
      
      
      const worldHeight=ismobile?worldWidth*(window.innerHeight/window.innerWidth)*0.27:worldWidth*(window.innerHeight/window.innerWidth)*0.8;
      const totalheight=totalwidth*(window.innerHeight/window.innerWidth);
      
      imageMesh.geometry.dispose(); // Clean up the previous geometry
      imageMesh.geometry = new THREE.PlaneGeometry(worldWidth, worldHeight);
      imageMesh.position.set(0,totalheight/3,1);


      console.log(`New Image Width: ${worldWidth}, New Image Height: ${worldHeight}`);
    };
    const textureLoader = new THREE.TextureLoader();
    let imageMesh, imageMaterial; 
    textureLoader.load(logo, (texture) => {
      const imageGeometry = new THREE.PlaneGeometry(w,h);
      imageMaterial = new THREE.MeshStandardMaterial({ map: texture, transparent: true, alphaTest: 0.5 });
      imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
      imageMesh.position.set(0, 6, 1);
      imageMesh.castShadow = true;
      imageMeshRef.current = imageMesh;
      //imageMesh.scale.set(scalefact,scalefact,1);
      updateImageSize(camera, imageMesh, 0.5);
      scene.add(imageMesh);
    });
    const leftImageTexture = textureLoader.load(cdance);
    const rightImageTexture = textureLoader.load(cstand);
    const imageSize = ismobile ? 3 : 5; // Adjust size for mobile vs desktop
    
    const leftImageMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(10,15),
      new THREE.MeshStandardMaterial({ map: leftImageTexture, transparent: true ,alphaTest:0.5})
    );
    const rightImageMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(10,15),
      new THREE.MeshStandardMaterial({ map: rightImageTexture, transparent: true,alphaTest:0.5 })
    );
    scene.add(leftImageMesh,rightImageMesh);
    leftImageMesh.visible=false;
    rightImageMesh.visible=false;
    leftImageMesh.castShadow=true;
    rightImageMesh.castShadow=true;
    const textureLoader1 = new THREE.TextureLoader();
    let ground;
    textureLoader1.load(grnd, (texture) => {
      const groundGeometry = new THREE.PlaneGeometry(200, 50);
      const groundMaterial = new THREE.MeshStandardMaterial({ 
          map: texture,
          side: THREE.DoubleSide,
      });
      ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -1;
      ground.receiveShadow = true;
      scene.add(ground);
    });
    const newLogoTexture = textureLoader.load(logo1);
    
    
    
    const light = createLight(0xF00000, 2, [0, -8, 5],10);
    const light1 = createLight(0xF00000, 2, [0, -8, 5],10);
    const helpleft = createLight(0xF00000, 0, [-7, 3, 2],10);
    const helpright = createLight(0xF00000, 0, [5, 3, 2],10);
    const footlight1=createLight(0xFFFFFF,0,[0,0,0],10);
    const footlight2=createLight(0xFFFFFF,0,[0,0,0],10);
    const footlight=createLight(0xFFFFFF,0,[0,0,0],30);
    
    const mouseLight = new THREE.PointLight(0xFFFFFF, 0, 20);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;
    const tbox=new THREE.BoxGeometry(5,5,5);
    const tmat=new THREE.MeshStandardMaterial({color:0xFFFFFF})
    const tboxx=new THREE.Mesh(tbox,tmat);
    tboxx.position.set(0,6,-20);
    
    // scene.add(tboxx);
    // footlight.position.copy(tboxx.position);
    // footlight.position.z+=3;
    // tboxx.visible=false;
    // tboxx.castShadow=true;
    footlight.intensity=0;
    const createLightOval = (position) => {
      const ovalGeometry = ismobile?new THREE.SphereGeometry(0.2, 16, 16):new THREE.SphereGeometry(0.3, 16, 16);
      const ovalMaterial = new THREE.MeshBasicMaterial({ color: 0xF00000 });
      const lightOval = new THREE.Mesh(ovalGeometry, ovalMaterial);
      lightOval.scale.set(1, 1.8, 1);
      lightOval.position.copy(position);
      return lightOval;
    };

    const lightOval = createLightOval(light.position);
    const lightOval1 = createLightOval(light1.position);
    scene.add(lightOval, lightOval1);

    const animate = () => {
      requestAnimationFrame(animate);
      const fov = camera.fov;
      const distance = camera.position.z-1;
      const aspectRatio = window.innerWidth / window.innerHeight;

      
      const verticalFOVInRadians = (fov * Math.PI) / 180;
      
      
      const horizontalFOV = 2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);
      
      const worldWidth = ismobile?2 * Math.tan(horizontalFOV / 2) * distance*0.7:2 * Math.tan(horizontalFOV / 2) * distance*0.5;
      const totalwidth=2 * Math.tan(horizontalFOV / 2) * distance;

      
      // const worldHeight=ismobile?worldWidth*(window.innerHeight/window.innerWidth)*0.4:worldWidth*(window.innerHeight/window.innerWidth)*0.8;
      const totalheight=totalwidth*(window.innerHeight/window.innerWidth);
      lightOval.position.copy(light.position);
      lightOval1.position.copy(light1.position);
      const moveSpeed = 0.04;
      const endPosition = ismobile?new THREE.Vector3(totalwidth*0.17,totalheight*0.42, 1):new THREE.Vector3(totalwidth*0.122,totalheight*0.42, 1);
      const endPosition1 =ismobile?new THREE.Vector3(-totalwidth*0.22, totalheight*0.45, 2):new THREE.Vector3(-totalwidth*0.165, totalheight*0.5, 2);
      const targetIntensity = 100;
      const intensitySpeed = 0.01;
      if (light.position.distanceTo(endPosition) > 1) {
        light.position.lerp(endPosition, moveSpeed);
        light1.position.lerp(endPosition1, moveSpeed);
      } else {
        light.intensity = THREE.MathUtils.lerp(light.intensity, targetIntensity, intensitySpeed);
        light1.intensity = THREE.MathUtils.lerp(light1.intensity, targetIntensity, intensitySpeed);
        helpleft.intensity = THREE.MathUtils.lerp(helpleft.intensity, targetIntensity, intensitySpeed);
        helpright.intensity = THREE.MathUtils.lerp(helpright.intensity, targetIntensity, intensitySpeed);
        mouseLight.intensity=5;
        if (imageMaterial.map !== newLogoTexture) {
          imageMaterial.map = newLogoTexture;
          imageMaterial.needsUpdate = true;
        }
        lightOval.visible = false;
        lightOval1.visible = false;
      }

      if(boxup){
        // console.log("BOXUP")
        // tboxx.visible=true;
        leftImageMesh.visible=true;
        rightImageMesh.visible=true;
        footlight1.visible=true;
        footlight2.visible=true;
        footlight1.intensity=5;
        footlight2.intensity=5;
        footlight1.position.copy(leftImageMesh.position);
        footlight2.position.copy(rightImageMesh.position);
        // leftImageMesh.position.copy(tboxx.position);
        // rightImageMesh.position.copy(tboxx.position);
        leftImageMesh.position.x-=20;
        rightImageMesh.position.x+=20;
        footlight.intensity=50;
        footlight.position.y+=1;
        footlight1.position.z+=2;
        footlight2.position.z+=2;
        footlight1.position.y+=2;
        footlight2.position.y+=2;
      }
      else{
        // tboxx.visible=false;
        footlight.intensity=0;
        leftImageMesh.visible=false;
        rightImageMesh.visible=false;
        footlight1.visible=false;
        footlight2.visible=false;
      }  
      renderer.render(scene, camera);
    };

    animate();

    // const handleScroll = () => {
    //   const newScrollPosition = window.pageYOffset;
    //   setScrollPosition(newScrollPosition);

    //   if (imageMeshRef.current) {
    //     // Calculate zoom based on scroll position
    //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    //     const scrollProgress = newScrollPosition / maxScroll;
    //     const minScale = 0.5; // Minimum scale value
    //     const newScale = Math.max(1 - scrollProgress, minScale);

    //     // gsap.to(imageMeshRef.current.scale, {
    //     //   x: newScale,
    //     //   y: newScale,
    //     //   duration: 0.5,
    //     //   ease: "power2.out"
    //     // });

    //     // // Optionally move the image up as it scales down
    //     // gsap.to(imageMeshRef.current.position, {
    //     //   y: 6 + (scrollProgress * 2), // Adjust multiplier for desired movement
    //     //   duration: 0.5,
    //     //   ease: "power2.out"
    //     // });
    //   }
    // };

    //window.addEventListener('scroll', handleScroll);


    const handleResize = () => {
      // h=window.innerHeight;
      // w=window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (imageMeshRef.current) {
        updateImageSize(camera, imageMeshRef.current, 0.5);
      }
    };
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targetPlaneZ = camera.position.z-13;
      const planeNormal = new THREE.Vector3(0, 0, -1);
      const plane = new THREE.Plane(planeNormal, targetPlaneZ);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);
      if (intersectPoint) {
        mouseLight.position.copy(intersectPoint);
      }
    };

    const onScroll = (event) => {
      //console.log("HERE");
      const scrollAmount = 0.35; 
      
      if(event.type==="wheel" &&  camera.position.z > 1){
        if (event.deltaY > 0) {

          camera.position.z -= scrollAmount;
          ground.position.z-=scrollAmount;
          // light1.position.z-=scrollAmount;
          // helpright.position.z-=scrollAmount;
          // helpleft.position.z-=scrollAmount;
          // light.position.z-=scrollAmount;
          
        } 
        else if(camera.position.z<15){
          camera.position.z += scrollAmount;
          ground.position.z += scrollAmount;
          // light1.position.z+=scrollAmount;
          // helpright.position.z+=scrollAmount;
          // helpleft.position.z+=scrollAmount;
          // light.position.z+=scrollAmount;
        }
      }
      else{
        if (event.key === 'ArrowUp' && camera.position.z<15) {
          camera.position.z += scrollAmount; // Scroll forward
          ground.position.z += scrollAmount;
        } else if (event.key === 'ArrowDown' && camera.position.z > 1) {
          camera.position.z -= scrollAmount; // Scroll backward
          ground.position.z-=scrollAmount;
        }
      }
      if(camera.position.z<2){
        boxup=true;
      }
      else{
        boxup=false;
      }
      //window.scrollTo(0,0,0);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', onScroll);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      
      // window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div>
        <div ref={mountRef} style={{ height: '100vh', overflow:'hidden',position:AbsoluteCenter}} />
        <SimpleBox boxup={boxup}/>
    </div>
  );
};

export default ThreeScene;