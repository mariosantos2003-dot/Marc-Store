// src/components/Logo3D.jsx
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import Header from "./Header";


function LogoModel(){
  const {scene} = useGLTF("public/assets/Final-Logo.glb");
  return <primitive object={scene}/>
}
function Background(){
  const texture = useLoader(TextureLoader, "public/assets/background.jpg");
  const {scene} = useThree();
  scene.background = texture;
}

export default function Logo(){
  return(
  <>
    <Header />
    <Canvas style={{height: "100vh", width: "100%"}} camera={{position: [0, 0, 5]}}>
    
      <ambientLight intensity={0.5} />
      <directionalLight position={[20, 10, 5]} intensity={20} />
   
      <pointLight position={[2, 10, 10]} intensity={1} />
      <Background />
  
      <LogoModel />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  </>
  )
}