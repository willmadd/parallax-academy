import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
// shaderMaterial
// import { TextureLoader } from "three/src/loaders/TextureLoader";

const SphereShaderMaterial = {
  uniforms: {
    u_time: { type: "f", value: 0 },
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
  `,
  fragmentShader: `
   varying vec2 vUv;
uniform float u_time;

// Function to generate noise
float noise(vec2 p) {
    return sin(p.x) * sin(p.y);
}

void main() {
    vec2 uv = vUv;
    
    // Create a swirling effect using noise
    float n = noise(uv * 10.0 + u_time * 0.5);
    
    // Create different shades of purple based on the noise value
    vec3 color = vec3(0.5 + 0.4 * n, 0.15 + 0.1 * n, 0.8 + 0.4 * n);
    
    // Set the final color with some transparency
    gl_FragColor = vec4(color, 0.6);
}
  `,
};

type Props = {};

const Environment = (props: Props) => {
  const colorMap = useLoader(THREE.TextureLoader, "/space.webp");

  const materialRef = React.useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[990, 15, 15]} />
        <meshStandardMaterial
          // color="blue"
          map={colorMap}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[985, 15, 15]} />
        <shaderMaterial
          ref={materialRef}
          side={THREE.BackSide}
          attach="material"
          args={[SphereShaderMaterial]}
          transparent
        />
      </mesh>
    </>
  );
};

export default Environment;
