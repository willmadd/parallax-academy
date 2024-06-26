"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Environment from "./Environment";
import Logo from "./Logo";
import SolarSystem from "./SolarSystem";
import usePlanetStore from "./store/PlanetsStore";
import { Satellite } from "./Satellite";

type Props = {};

const Scene = (props: Props) => {
  const [moveCamera, setMoveCamera] = useState(true);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const targetRef = useRef(new THREE.Vector3(0, 0, 0)); // Initial lookAt target
  const lookAtTarget = new THREE.Vector3(0, 0, 0); // Final lookAt target
  const { planets, setActivePlanet, activePlanet } = usePlanetStore();
  const [inStateLookAtTarget, setInStateLookAtTarget] = useState(lookAtTarget);

  useFrame(() => {
    if (cameraRef.current) {
      if (activePlanet !== null && moveCamera) {
        cameraRef.current.position.z -= 0.3;
        // cameraRef.current.position.lerp(
        //   planets[activePlanet - 1].position,
        //   0.001
        // );

        if (cameraRef.current.position.z <= 0) {
          cameraRef.current.position.z = 0; // Ensure the camera stops at 10 units forward
          //   setMoveCamera(false); // Stop moving the camera
        }

        targetRef.current.lerp(inStateLookAtTarget, 0.001);
      } else {
        targetRef.current.copy(inStateLookAtTarget);
      }
      cameraRef.current.lookAt(targetRef.current);
    }
  });

  useEffect(() => {
    if (!activePlanet) return;

    const activePlanetLookAt = planets[activePlanet - 1].position;
    setInStateLookAtTarget(activePlanetLookAt);
  }, [activePlanet, setInStateLookAtTarget, planets]);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} position={[0, 0, 10]} makeDefault />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        // lookAt={initialLookAtTarget}
      />
      <Environment />
      <Logo />
      <SolarSystem />
      <Satellite scale={0.05} position={[3, -5, -20]} />
    </>
  );
};

export default Scene;
