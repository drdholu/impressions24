import { Scene, WebGLRenderer, PerspectiveCamera } from 'three';
import { FireFlyMaterial } from './ui/fireflymaterail';
import { FireFlies } from './ui/firefly';

// Initialize scene, camera, and renderer
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create fireflies
const fireflies = new FireFlies({
    groupCount: 3,
    firefliesPerGroup: 100,
    groupRadius: 10,
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    fireflies.update();
    renderer.render(scene, camera);
}
animate();