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


const ThreeScene = () => {
  const mountRef = useRef(null);
  const mouseLightRef = useRef(null);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
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

    const light = createLight(0xF00000, 2, [0, 0, 5]);
    const light1 = createLight(0xF00000, 2, [0, 0, 5]);
    const helpleft = createLight(0xF00000, 0, [-7, 3, 2]);
    const helpright = createLight(0xF00000, 0, [5, 3, 2]);
    const footlight = createLight(0x808080, 0, [0, 0, 0]);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(logo, (texture) => {
      const imageGeometry = new THREE.PlaneGeometry(20, 10);
      const imageMaterial = new THREE.MeshStandardMaterial({ map: texture, transparent: true, alphaTest: 0.5 });
      const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
      imageMesh.position.set(0, 6, 1);
      imageMesh.castShadow = true;
      scene.add(imageMesh);
    });

    const mouseLight = new THREE.PointLight(0xFFFFFF, 5, 20);
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
      const ovalGeometry = new THREE.SphereGeometry(0.3, 16, 16);
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
      const moveSpeed = 0.04;
      const endPosition = new THREE.Vector3(4.8, 8, 2);
      const endPosition1 = new THREE.Vector3(-7, 10, 2);
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
        lightOval.visible = false;
        lightOval1.visible = false;
      }

      lightOval.position.copy(light.position);
      lightOval1.position.copy(light1.position);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
        <AboutUs />
      <Events />
      <Memories />
    </div>
  );
};

export default ThreeScene;
