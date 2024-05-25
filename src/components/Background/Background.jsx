

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import css from "./Background.module.css";


export const Background = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
       await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
     
      particles: {
        color: {
      
          value: ["#ff0000", "#00ff00", "#0000ff"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 10, max: 30 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className={css.background}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      /></div>
    );
  } else {
    return null;
  }

  
};