import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";


const Model = forwardRef((props, ref) => {
    // const { scene } = useGLTF(process.env.PUBLIC_URL + "/models/paint kit mini.glb");
    const { scene } = useGLTF(process.env.PUBLIC_URL + props.url);
    const clonedScene = scene.clone();
    // const [isHovered, setIsHovered] = useState(false);
    return (
        <primitive
            ref={ref}
            object={scene}
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



const L = () => {
    return (
        <div>
            <Model rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[10, 10, 10]} url={"/models/Concert.glb"} />
        </div>
    )
}

export default L