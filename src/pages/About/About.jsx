
import ProjectsSection from "../../components/Projects/ProjectsSection/ProjectsSection.jsx";
import { Intro } from "../../components/AboutMeContent/Intro/Intro.jsx";
import { Tools } from "../../components/AboutMeContent/Tools/Tools.jsx";
import { Docs } from "../../components/AboutMeContent/Docs/Docs.jsx";
import { ScrollableSection } from "../../components/SharedLayout/ScrollableSection/ScrollableSection.jsx";
import css from "./About.module.css";


const About = () => {
  return (
    <div className={css.wrapper}>
      
      <div className={css.section} id="about">
        <ScrollableSection delay={0}><Intro /></ScrollableSection>
      </div>
      <div className={css.section}>
        <ScrollableSection delay={0.2}><Tools /></ScrollableSection>
      </div>
      <div className={css.section}>
        <ScrollableSection delay={0.4}><Docs /></ScrollableSection>
        </div>
      <div className={css.section} id="projects">
        <ScrollableSection delay={0.6}><ProjectsSection /></ScrollableSection>
        </div>
        
    </div>
  );
};

export default About;