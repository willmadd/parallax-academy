import React from "react";
import usePlanetStore from "./store/PlanetsStore";
import { Planet1 } from "./planets/Planet";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { motion as motion2d } from "framer-motion";
type Props = {};
// usePlanetStore
const SolarSystem = (props: Props) => {
  const { planets, setActivePlanet, activePlanet } = usePlanetStore();
  console.log("activePlanet", activePlanet);
  return (
    <>
      {planets.map((planet) => {
        return (
          <motion.mesh
            animate={{
              scale: activePlanet === planet.id ? 80 : 1,
            }}
            transition={{
              duration: 5,
              delay: 0.5,
              ease: "easeIn",
            }}
            key={planet.id}
            position={planet.position}
          >
            <Planet1 />
            <Html position={[0, -1, 0]}>
              <motion2d.button
                animate={{
                  opacity: activePlanet ? 0 : 1,
                }}
                onClick={() => setActivePlanet(planet.id)}
                className="bg-white rounded-lg px-1"
              >
                {planet.label}
              </motion2d.button>
            </Html>
          </motion.mesh>
        );
      })}
    </>
  );
};

export default SolarSystem;
