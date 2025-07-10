// src/components/Logo3D.jsx
import { Canvas } from '@react-three/fiber';
import { Text3D, Center, OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import font from '../assets/fonts/font.json';

export default function Logo() {
  return (
    <div className>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <Center>
            <Text3D
              font="sans-serif"
              size={3}
              height={1}
              curveSegments={16}
              bevelEnabled
              bevelThickness={0.15}
              bevelSize={0.1}
            >
              PANICO {/* Cambia esto por el nombre del proyecto */}
              <meshStandardMaterial
                metalness={1}
                roughness={0.1}
                
              />
            </Text3D>
          </Center>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
