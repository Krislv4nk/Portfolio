import AboutMe from 'pages/AboutMe/AboutMe';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';

const AboutAndProjects = () => {
  return (
    <div>
      <section id="about-me">
          <AboutMe />
        
      </section>

      <section id="projects">
       
          <ProjectsPage />
      </section>
    </div>
  );
};

export default AboutAndProjects;




// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import AboutMe from 'pages/AboutMe/AboutMe';
// import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
// import css from './AboutAndProjects.module.css';

// const AboutAndProjects = () => {
//   return (
//     <div className={css.wrapper}>
//       <Parallax pages={2} style={{ height: '100vh' }}>
        
//         {/* AboutMe */}
//         <ParallaxLayer offset={0} speed={0.5} factor={1}>
//           <section id="about-me" className={css.section}>
//             <AboutMe />
//           </section>
//         </ParallaxLayer>

//         {/* ProjectsPage */}
//         <ParallaxLayer offset={1} speed={0.5} factor={1}>
//           <section id="projects" className={css.section}>
//             <ProjectsPage />
//           </section>
//         </ParallaxLayer>

//       </Parallax>
//     </div>
//   );
// };

// export default AboutAndProjects;

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import AboutMe from 'pages/AboutMe/AboutMe';
// import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
// import css from './AboutAndProjects.module.css';

// const AboutAndProjects = () => {
//   return (
//     <div>
//       <Parallax pages={3} style={{ height: '100vh' }}>
//       <section id="about-me">
        
//                 {/* Layer 1 – Intro */}
//                 <ParallaxLayer offset={0} speed={0.5}>
//                   <div className={css.section}>
//               <AboutMe />
//               </div>
//         </ParallaxLayer>
//       </section>
//         <section id="projects">
//            <ParallaxLayer offset={1} speed={0.7}>
//                     <div className={css.section}>
//               <ProjectsPage />
//               </div>
//         </ParallaxLayer>
//         </section>
//         </Parallax>
//     </div>
//   );
// };

// export default AboutAndProjects;