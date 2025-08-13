'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Nodes() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1;
  });
  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 2, Math.cos(i) * 2, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>
      ))}
    </group>
  );
}

export default function KubeBackground() {
  return (
    <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 5] }}>
      <Nodes />
    </Canvas>
  );
}
