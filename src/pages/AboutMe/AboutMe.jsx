
import ProjectsSection from "../../components/Projects/ProjectsSection/ProjectsSection.jsx";
import { Intro } from "../../components/AboutMeContent/Intro/Intro.jsx";
import { Tools } from "../../components/AboutMeContent/Tools/Tools.jsx";
import { Docs } from "../../components/AboutMeContent/Docs/Docs.jsx";
import { ScrollableSection } from "../../components/SharedLayout/ScrollableSection/ScrollableSection.jsx";
import css from "./AboutMe.module.css";


const AboutMe = () => {
  return (
    <div className={css.wrapper}>
      <section id="about-me">
      <div className={css.section}>
        <ScrollableSection delay={0}><Intro /></ScrollableSection>
      </div>
      <div className={css.section}>
        <ScrollableSection delay={0.2}><Tools /></ScrollableSection>
      </div>
      <div className={css.section}>
        <ScrollableSection delay={0.4}><Docs /></ScrollableSection>
        </div>
      </section>
      <section className={css.section} id="projects">
      <div className={css.section}>
        <ScrollableSection delay={0.6}><ProjectsSection /></ScrollableSection>
        </div>
        </section>
    </div>
  );
};

export default AboutMe;