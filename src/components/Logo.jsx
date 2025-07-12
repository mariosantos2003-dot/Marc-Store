import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import Header from "./Header/Header";

function LogoModel() {
  const { scene } = useGLTF("/assets/Final-Logo.glb");
  return <primitive object={scene} />;
}

function Background() {
  const texture = useLoader(TextureLoader, "/assets/background.jpg");
  const { scene } = useThree();
  scene.background = texture;
}

export default function Logo3D() {
  return (
  <>
  
    <Canvas
      style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0, zIndex: -10}}
      camera={{ position: [0, 0, 5] }}
    >
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[20, 10, 5]} intensity={20} />
      <pointLight position={[2, 10, 10]} intensity={1} />
      <Background />
      <LogoModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
    </>
  );
}
