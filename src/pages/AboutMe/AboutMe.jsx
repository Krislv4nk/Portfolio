

import css from "./AboutMe.module.css";
import { Intro } from "../../components/AboutMeContent/Intro/Intro.jsx";
import { Tools } from "../../components/AboutMeContent/Tools/Tools.jsx";
import { Docs } from "../../components/AboutMeContent/Docs/Docs.jsx";

const AboutMe = () => {
  return (
    <div className={css.wrapper}>
            <Intro />
            <Tools />
            <Docs />
    </div>
  );
};

export default AboutMe;

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import css from "./AboutMe.module.css";
// import { Intro } from "../../components/AboutMeContent/Intro/Intro.jsx";
// import { Tools } from "../../components/AboutMeContent/Tools/Tools.jsx";
// import { Docs } from "../../components/AboutMeContent/Docs/Docs.jsx";

// const AboutMe = () => {
//   return (
//     <div className={css.wrapper}>
//       <Parallax pages={3} style={{ height: '70vh' }} >
//         {/* Layer 1 – Intro */}
//         <ParallaxLayer offset={0} speed={1} style={{
//           height: '80vh',
//         }}
//         >
//           <div className={css.section}>
//             <Intro />
//           </div>
//         </ParallaxLayer>

//         {/* Layer 2 – Tools */}
//         <ParallaxLayer offset={1} speed={1} >
//           <div className={css.section}>
//             <Tools />
//           </div>
//         </ParallaxLayer>

//         {/* Layer 3 – Docs */}
//         <ParallaxLayer offset={2} speed={1} >
//           <div className={css.section}>
//             <Docs />
//           </div>
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   );
// };

// export default AboutMe;