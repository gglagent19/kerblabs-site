"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { type MotionValue } from "framer-motion";

/* ── AI Neural Network — nodes + connections ── */
function NeuralNetwork({ mx, my }: { mx: MotionValue; my: MotionValue }) {
  const groupRef = useRef<THREE.Group>(null!);
  const nodesRef = useRef<THREE.InstancedMesh>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const nodeCount = 80;

  const { nodePositions, edges } = useMemo(() => {
    const positions: THREE.Vector3[] = [];

    // Create clustered node positions (like a brain/network shape)
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 1.8;
      // Slightly flatten to make it wider than tall
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.3;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      const z = r * Math.cos(phi) * 0.9;
      positions.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby nodes (edges)
    const edgePairs: [number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < 1.6) {
          edgePairs.push([i, j]);
        }
      }
    }

    return { nodePositions: positions, edges: edgePairs };
  }, []);

  // Setup instanced mesh matrices
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Edge line geometry
  const linePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      arr[i * 6] = nodePositions[a].x;
      arr[i * 6 + 1] = nodePositions[a].y;
      arr[i * 6 + 2] = nodePositions[a].z;
      arr[i * 6 + 3] = nodePositions[b].x;
      arr[i * 6 + 4] = nodePositions[b].y;
      arr[i * 6 + 5] = nodePositions[b].z;
    });
    return arr;
  }, [edges, nodePositions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Slow rotation + mouse tracking
    groupRef.current.rotation.y = t * 0.06;
    groupRef.current.rotation.x = t * 0.02;
    const mxv = mx.get();
    const myv = my.get();
    groupRef.current.rotation.y += mxv * 0.4;
    groupRef.current.rotation.x += myv * 0.2;

    // Animate nodes — gentle breathing pulse
    for (let i = 0; i < nodeCount; i++) {
      const p = nodePositions[i];
      const pulse = 1 + Math.sin(t * 1.5 + i * 0.4) * 0.15;
      dummy.position.set(
        p.x + Math.sin(t * 0.3 + i) * 0.06,
        p.y + Math.cos(t * 0.4 + i * 0.7) * 0.06,
        p.z
      );
      const s = 0.055 * pulse;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      nodesRef.current.setMatrixAt(i, dummy.matrix);
    }
    nodesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Nodes as instanced spheres */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.9}
        />
      </instancedMesh>
    </group>
  );
}

/* ── Data flow particles (pulse along edges) ── */
function DataPulses({ mx, my }: { mx: MotionValue; my: MotionValue }) {
  const ref = useRef<THREE.Points>(null!);
  const count = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 1.3;
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      arr[i * 3 + 2] = r * Math.cos(phi) * 0.9;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = t * 0.015;
    const mxv = mx.get();
    const myv = my.get();
    ref.current.rotation.y += mxv * 0.4;
    ref.current.rotation.x += myv * 0.2;

    const posArr = ref.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += Math.sin(t * 2 + i * 0.5) * 0.002;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#8B5CF6"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Ambient glow spheres (represent data hubs) ── */
function GlowHub({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const s = size * (1 + Math.sin(t) * 0.3);
    ref.current.scale.setScalar(s);
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.15;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

/* ── Main scene ── */
export default function HeroScene({
  mx,
  my,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#030308"]} />

      {/* Lighting — warm tones, not space-like */}
      <ambientLight intensity={0.3} />
      <pointLight position={[-4, 3, 5]} intensity={2} color="#00E5FF" />
      <pointLight position={[4, -2, 4]} intensity={1.5} color="#FF2D6F" />
      <pointLight position={[0, 4, 2]} intensity={1} color="#8B5CF6" />

      {/* AI Neural network */}
      <NeuralNetwork mx={mx} my={my} />

      {/* Data flow particles */}
      <DataPulses mx={mx} my={my} />

      {/* Glow hubs (key data points) */}
      <GlowHub position={[0, 0, 0]} color="#7B61FF" size={0.5} speed={0.8} />
      <GlowHub position={[1.5, 0.8, -0.5]} color="#00E5FF" size={0.3} speed={1.1} />
      <GlowHub position={[-1.2, -0.6, 0.5]} color="#FF2D6F" size={0.25} speed={0.9} />
    </Canvas>
  );
}
