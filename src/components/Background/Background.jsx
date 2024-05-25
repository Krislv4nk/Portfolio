

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";


export const Background = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
       await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
     
      particles: {
        color: {
          value: ["#a6c1ee", "#606390", "#00baff", "#0842b6", "#ffffff"],
          animation: {
            enable: true,
            speed: 20, // Швидкість зміни кольорів
            sync: true, // Встановіть на false, якщо хочете, щоб кожна частинка змінювала колір незалежно
          },
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
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 10, max: 40 },
          
          },
       
      },
      detectRetina: true,
    }),
    [],
  );

 


  if (init) {
    return (
   
      <Particles 
        id="tsparticles"
        init={initParticlesEngine}
        options={options}
       
      />
    
    );
  } 

  
};