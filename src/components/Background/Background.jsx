

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {Container} from 'components/Container/Container';


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
     fpsLimit: 120,
      interactivity: {
        events: {
         
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      
      particles: {
        
        color: {
          value: "#00baff",
          animation: {
            enable: true,
            speed: 20,
            sync: true,
          }
        },
        
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 2 }, 
          animation: {
            enable: true,
            speed: 10, 
            sync: false, 
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 10 },
          
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

 


  if (init) {
    return (
   <Container>
      <Particles 
        id="tsparticles"
        init={initParticlesEngine}
        options={options}
       
      />
   </Container>
    );
  } 

  
};