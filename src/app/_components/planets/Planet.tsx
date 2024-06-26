/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 planet1.glb --transform -o planet.tsx -t 
Files: planet1.glb [324.16KB] > /Users/williammaddicott/Downloads/planet1-transformed.glb [21.23KB] (93%)
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere002: THREE.Mesh;
    Sphere002_1: THREE.Mesh;
    Sphere002_2: THREE.Mesh;
    Sphere002_3: THREE.Mesh;
  };
  materials: {
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Planet1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/planets/planet1.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-3.138, 0.873, 3.14]}>
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Sphere002_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Sphere002_2.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Sphere002_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/planets/planet1.glb");
