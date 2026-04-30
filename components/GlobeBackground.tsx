"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const wireRef = useRef<THREE.LineSegments>(null!);
  const dotsRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const wireGeo = useMemo(() => {
    const sphere = new THREE.SphereGeometry(2, 48, 32);
    return new THREE.WireframeGeometry(sphere);
  }, []);

  const dotPositions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.02;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={wireRef} geometry={wireGeo}>
        <lineBasicMaterial
          color="#B8FF00"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dotPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#B8FF00"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

export default function GlobeBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1] motion-reduce:hidden"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <Globe />
      </Canvas>
    </div>
  );
}
