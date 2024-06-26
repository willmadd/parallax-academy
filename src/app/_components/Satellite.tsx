import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Satellite(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/planets/satellite.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 2.396, 0]}
        scale={[1.481, 2.284, 1.481]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.PaletteMaterial002}
        position={[0.137, 2.396, 0]}
        scale={[1.481, 2.284, 1.481]}
      />
    </group>
  );
}

useGLTF.preload("/planets/satellite.glb");
