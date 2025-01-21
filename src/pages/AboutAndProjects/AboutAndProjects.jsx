

import { Outlet } from 'react-router-dom';
import AboutMe from 'pages/AboutMe/AboutMe';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';

const AboutAndProjects = () => {
  return (
    <div>
      
      <section id="about-me">
        <AboutMe/>
        
      </section>

      
      <section id="projects">
        <ProjectsPage/>
        
        <Outlet />
      </section>
    </div>
  );
};

export default AboutAndProjects;
