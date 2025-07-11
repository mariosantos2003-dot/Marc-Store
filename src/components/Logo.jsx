// src/components/Logo3D.jsx
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";


function LogoModel(){
  const {scene} = useGLTF("public/assets/logo.glb");
  return <primitive object={scene}/>
}
function Background(){
  const texture = useLoader(TextureLoader, "public/assets/background.jpg");
  const {scene} = useThree();
  scene.background = texture;
}

export default function Logo(){
  return(
    <Canvas style={{height: "100%", width: "100%", backgroundImage: "url(./assets/background.jpg)"}}>
      <ambientLight />
      <directionalLight position={[2,2,2]} />
      <LogoModel />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}