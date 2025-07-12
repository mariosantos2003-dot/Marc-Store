import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { Environment } from '@react-three/drei';

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
      style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0, zIndex: -10, zoom: 1 }}
      camera={{ position: [0, 0, 5] }}
    >
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />
      <Background />
      <LogoModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
    </>
  );
}
