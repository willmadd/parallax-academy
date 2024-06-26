"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";

type Props = {};

const ThreeWrapper = (props: Props) => {
  return (
    <Canvas className="h-full">
      <ambientLight />
      <Scene />
    </Canvas>
  );
};

export default ThreeWrapper;
