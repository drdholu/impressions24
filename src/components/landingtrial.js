// src/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import Memories from './Memories';
import Events from './Events';
import AboutUs from './AboutUs';
import logo from '../images/Logos/Name Logo filled.png';
import grnd from '../images/ground1.webp';
import { image } from 'framer-motion/client';
import GlowingCursor from './glowcursor';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const mouseLightRef = useRef(null);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const imageMeshRef = useRef(null);
  var w=window.innerWidth;
  var h=window.innerHeight;
  const scalefact=window.innerWidth/1300;
  const ismobile=window.innerWidth<1024;
  useEffect(() => {
    console.log(scalefact);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000000');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    const createLight = (color, intensity, position) => {
      const light = new THREE.PointLight(color, intensity, 10);
      light.castShadow = true;
      light.position.set(...position);
      scene.add(light);
      return light;
    };
    const updateImageSize = (camera, imageMesh, screenHeightPercentage, screenWidthPercentage) => {
      console.log("Calculating new image size");
    
      // Use window dimensions
      const fov = camera.fov; // Field of view in degrees
      const distance = camera.position.z-imageMesh.position.z; // Use the camera's current z position
      const aspectRatio = window.innerWidth / window.innerHeight;
      
      // Convert vertical FOV from degrees to radians
      const verticalFOVInRadians = (fov * Math.PI) / 180;
      
      // Calculate horizontal FOV
      const horizontalFOV = 2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);
      
      // Calculate world width based on the horizontal FOV
      const worldWidth = ismobile?2 * Math.tan(horizontalFOV / 2) * distance*0.7:2 * Math.tan(horizontalFOV / 2) * distance*0.5;
      const totalwidth=2 * Math.tan(horizontalFOV / 2) * distance;
      // Calculate world height based on the vertical FOV
      
      const worldHeight=ismobile?worldWidth*(window.innerHeight/window.innerWidth)*0.3:worldWidth*(window.innerHeight/window.innerWidth)*0.8;
      const totalheight=totalwidth*(window.innerHeight/window.innerWidth);
      // Update the geometry size
      imageMesh.geometry.dispose(); // Clean up the previous geometry
      imageMesh.geometry = new THREE.PlaneGeometry(worldWidth, worldHeight);
      imageMesh.position.set(0,totalheight/3,1);
      console.log(`New Image Width: ${worldWidth}, New Image Height: ${worldHeight}`);
    };
    
    
    
    
    
    const light = createLight(0xF00000, 2, [0, -10, 5]);
    const light1 = createLight(0xF00000, 2, [0, -10, 5]);
    const helpleft = createLight(0xF00000, 0, [-7, 3, 2]);
    const helpright = createLight(0xF00000, 0, [5, 3, 2]);
    const footlight = createLight(0x808080, 0, [0, 0, 0]);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(logo, (texture) => {
      const imageGeometry = new THREE.PlaneGeometry(w,h);
      const imageMaterial = new THREE.MeshStandardMaterial({ map: texture, transparent: true, alphaTest: 0.5 });
      const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
      imageMesh.position.set(0, 6, 1);
      imageMesh.castShadow = true;
      imageMeshRef.current = imageMesh;
      //imageMesh.scale.set(scalefact,scalefact,1);
      updateImageSize(camera, imageMesh, 0.5);
      scene.add(imageMesh);
    });

    const mouseLight = new THREE.PointLight(0xFFFFFF, 0, 20);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targetPlaneZ = 2;
      const planeNormal = new THREE.Vector3(0, 0, -1);
      const plane = new THREE.Plane(planeNormal, targetPlaneZ);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);
      if (intersectPoint) {
        mouseLight.position.copy(intersectPoint);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const textureLoader1 = new THREE.TextureLoader();
    textureLoader1.load(grnd, (texture) => {
      const groundGeometry = new THREE.PlaneGeometry(50, 50);
      const groundMaterial = new THREE.MeshStandardMaterial({ 
          map: texture,
          side: THREE.DoubleSide,
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -1;
      ground.receiveShadow = true;
      scene.add(ground);
    });

    const textureLoadertop = new THREE.TextureLoader();
    textureLoadertop.load('./Foot logo white.png', (texture) => {
      const imageGeometry = new THREE.PlaneGeometry(2, 4);
      const imageMaterial = new THREE.MeshStandardMaterial({ map: texture, transparent: true, alphaTest: 0.5 });
      const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
      imageMesh.position.set(3, 8, 1);
      
      imageMesh.castShadow = true;
      scene.add(imageMesh);
    });

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
      const fov = camera.fov; // Field of view in degrees
      const distance = camera.position.z-1; // Use the camera's current z position
      const aspectRatio = window.innerWidth / window.innerHeight;
      
      // Convert vertical FOV from degrees to radians
      const verticalFOVInRadians = (fov * Math.PI) / 180;
      
      // Calculate horizontal FOV
      const horizontalFOV = 2 * Math.atan(Math.tan(verticalFOVInRadians / 2) * aspectRatio);
      
      // Calculate world width based on the horizontal FOV
      const worldWidth = ismobile?2 * Math.tan(horizontalFOV / 2) * distance*0.7:2 * Math.tan(horizontalFOV / 2) * distance*0.5;
      const totalwidth=2 * Math.tan(horizontalFOV / 2) * distance;
      // Calculate world height based on the vertical FOV
      
      const worldHeight=ismobile?worldWidth*(window.innerHeight/window.innerWidth)*0.4:worldWidth*(window.innerHeight/window.innerWidth)*0.8;
      const totalheight=totalwidth*(window.innerHeight/window.innerWidth);
      lightOval.position.copy(light.position);
      lightOval1.position.copy(light1.position);
      const moveSpeed = 0.04;
      const endPosition = ismobile?new THREE.Vector3(totalwidth*0.17,totalheight*0.42, 1):new THREE.Vector3(totalwidth*0.122,totalheight*0.42, 1);
      const endPosition1 =ismobile?new THREE.Vector3(-totalwidth*0.22, totalheight*0.45, 2):new THREE.Vector3(-totalwidth*0.17, totalheight*0.5, 2);
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
        lightOval.visible = false;
        lightOval1.visible = false;
      }

      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      h=window.innerHeight;
      w=window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (imageMeshRef.current) {
        updateImageSize(camera, imageMeshRef.current, 0.5); // Adjust image to 50% of screen height on resize
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='cursor-none'>
      <GlowingCursor/>
        <div ref={mountRef} style={{ width: '100vw', height: '90vh' }} />
        <AboutUs />
      <Events />
      <Memories />
    </div>
  );
};

export default ThreeScene;
