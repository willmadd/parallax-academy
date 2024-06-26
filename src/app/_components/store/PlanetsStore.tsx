import { create } from "zustand";
import * as THREE from "three";

interface PlanetState {
  position: THREE.Vector3;
  visible: boolean;
  id: number;
  slug: string;
  label: string;
}

interface PlanetsState {
  activePlanet: number | null;
  planets: PlanetState[];
  setActivePlanet: (id: number) => void;
}

const usePlanetStore = create<PlanetsState>()((set) => ({
  setActivePlanet: (id: number) => {
    set((state) => ({
      activePlanet: id,
      planets: state.planets.map((planet) => ({
        ...planet,
        visible: planet.id === id,
      })),
    }));
  },
  activePlanet: null,
  planets: [
    {
      position: new THREE.Vector3(25, -55, -100),
      visible: true,
      label: "Frontend2",
      slug: "frontend2",
      id: 1,
    },
    {
      position: new THREE.Vector3(60, 40, -130),
      visible: true,
      label: "Frontend",
      slug: "frontend",
      id: 2,
    },
    {
      position: new THREE.Vector3(-85, 50, -130),
      visible: true,
      slug: "backend",
      label: "Backend",
      id: 3,
    },
  ],
}));

export default usePlanetStore;
