"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import usePlanetStore from "./store/PlanetsStore";
import { redirect } from "next/navigation";

interface Props {
  redirectFunction: (to: string) => void;
}

const SceneOverlay = ({ redirectFunction }: Props) => {
  const { activePlanet, planets } = usePlanetStore();
  console.log("redirectFunction", redirectFunction);

  const activePlanetDetails = planets.find(
    (planet) => planet.id === activePlanet
  );

  if (!activePlanetDetails) {
    return null;
  }
  return (
    <AnimatePresence>
      {activePlanet && (
        <motion.div
          key={"overlay"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => redirectFunction(activePlanetDetails.slug)}
          transition={{ delay: 4, duration: 1 }} // Delays and durations should be in seconds
          className="z-10 absolute inset-0 bg-white"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default SceneOverlay;
