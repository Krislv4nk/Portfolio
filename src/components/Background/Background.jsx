

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";



export const Background = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
       await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
     fpsLimit: 40,
      interactivity: {
       
        modes: {
          push: {
            quantity: 8,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      
      particles: {
        color: {
          value: "#00baff",
          animation: {
            enable: true,
            speed: 0.5,
            sync: true,
          }
        },
        stroke: {
        width: 2, 
        color: {
          value: "#00baff",
          animation: {
            enable: true,
            speed: 3,
            sync: true,
          }
        },
      },
        
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: { min: 0.5, max: 0.9 }, 
          // animation: {
          //   enable: true,
          //   speed: 10, 
          //   sync: false, 
          // },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
          
        },
        shadow: {
          enable: true,
          blur: 10,
          color: "#00baff",
          
        },
      },
      detectRetina: true,
    }),
    [],
  );

 


  if (!init) {
    return null;
  } 
    return (
      <Particles 
        id="tsparticles"
        init={initParticlesEngine}
        options={options}
      />
    );
};