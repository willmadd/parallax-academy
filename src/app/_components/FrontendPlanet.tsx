import React from "react";

type Props = {};

const FrontendPlanet = (props: Props) => {
  return (
    <mesh position={[10, 20, -40]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default FrontendPlanet;
