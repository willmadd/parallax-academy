import { Svg, useHelper } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import parallaxLogo from "../svg/parallaxLogo.svg";

type Props = {};

const Logo = (props: Props) => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (svgRef.current) {
      const box = new THREE.Box3().setFromObject(svgRef.current);
      const size = new THREE.Vector3();
      box.getSize(size);
      setDimensions({ width: size.x, height: size.y });
    }
  }, []);

  return (
    <>
      <Svg
        ref={svgRef}
        src={parallaxLogo.src}
        scale={0.01}
        position={[-dimensions.width / 2, dimensions.height / 2, 0]}
      />
    </>
  );
};

export default Logo;
