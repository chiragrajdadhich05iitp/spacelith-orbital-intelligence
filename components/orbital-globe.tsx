"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SatelliteNodes({ count = 80 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const satellites = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 1.2;
      const speed = 0.005 + Math.random() * 0.01;
      const inclination = (Math.random() - 0.5) * Math.PI;
      const phase = Math.random() * Math.PI * 2;
      data.push({ radius, speed, inclination, phase });
    }
    return data;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    satellites.forEach((sat, i) => {
      const angle = sat.phase + t * sat.speed;
      const x = sat.radius * Math.cos(angle);
      const z = sat.radius * Math.sin(angle);
      const y = Math.sin(angle * 2) * Math.sin(sat.inclination) * 0.8;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.04);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#0A0A0A" />
    </instancedMesh>
  );
}

function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* LEO Ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <ringGeometry args={[2.5, 2.51, 64]} />
        <meshBasicMaterial color="#0A0A0A" opacity={0.15} transparent side={THREE.DoubleSide} />
      </mesh>
      {/* Polar Orbit Ring */}
      <mesh rotation={[Math.PI / 2.2, 0.4, 0]}>
        <ringGeometry args={[2.9, 2.91, 64]} />
        <meshBasicMaterial color="#00E5FF" opacity={0.35} transparent side={THREE.DoubleSide} />
      </mesh>
      {/* Equatorial Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.4, 3.41, 64]} />
        <meshBasicMaterial color="#0A0A0A" opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function EarthWireframe() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#F5F5F2"
        wireframe
        transparent
        opacity={0.35}
        roughness={0.8}
      />
    </mesh>
  );
}

export default function OrbitalGlobe() {
  return (
    <section id="globe" className="relative w-full h-[600px] border-b border-[#E2E2DF] bg-[#F5F5F2] flex items-center justify-center overflow-hidden">
      {/* Overlay HUD Data */}
      <div className="absolute top-8 left-8 z-10 font-mono text-xs pointer-events-none">
        <p className="text-[#737373]">LIVE ORBITAL PASS</p>
        <p className="font-semibold text-sm text-[#0A0A0A]">LEO / MEO PROPAGATION</p>
        <p className="text-[#737373] mt-2">SGP4 COMPUTE: NOMINAL</p>
      </div>

      <div className="absolute bottom-8 right-8 z-10 font-mono text-xs text-right pointer-events-none hidden sm:block">
        <p className="text-[#737373]">COORDINATE FRAME</p>
        <p className="font-semibold text-[#0A0A0A]">ECI (TEME) / J2000</p>
        <p className="text-emerald-600 font-semibold mt-1">● EDGE TRACKING 80 NODES</p>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <EarthWireframe />
          <OrbitRings />
          <SatelliteNodes count={90} />
        </Canvas>
      </div>
    </section>
  );
}