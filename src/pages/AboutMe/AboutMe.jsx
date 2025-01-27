import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import css from "./AboutMe.module.css";
import cv from "../../assets/cv.jpg";
import certificate from "../../assets/certificate.jpg";
import myPhoto from "../../assets/img/mainPhoto.png";
import { ScrollableComponent } from "../../components/ScrollableComponent/ScrollableComponent";
import { Marquee } from "../../components/Marquee/Marquee.tsx";
import { skills } from "../../lib/variables/variables";
import Icon from "../../components/Icon/Icon";



const AboutMe = () => {
  // const skills = [
  //   "React", "JavaScript", "Node.js", "CSS", "HTML",
  //   "Next.js", "TypeScript",
  //   "Axios", "MongoDB", "Material-UI", "Redux", "Express.js", "Firebase",
  //   "Git", "GitHub", "VS Code", "Figma", "@emotion/styled", "Postman", "Vite",
  //   "Nodemailer", "JWT", "Nodemon", "Yup", "Formik", "TailwindCSS", "SASS",
  //   "CssGrid", "Parcel", "i18next", "Vercel", "ChatGPT", "REST API"
  // ];

  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <img className={css.photo} src={myPhoto} alt="myPhoto" />
        <div className={css.helloDiv}>
          <h2 className={css.helloTitle}>Hello!</h2>
          <p className={css.text}> I am Kristina, a junior full-stack developer.
          I am eager to wholeheartedly dive into the world of programming. My skills and knowledge are constantly evolving,
          and I am always open to new challenges and opportunities for growth. I dream of working in a team and learning from
          experienced colleagues to become a true professional in my field. My goal is to combine my creative passion for learning
          and development to create quality and innovative products.
          </p>
          </div>
      </div>
        <h3 className={css.title}>Tech Stack, Tools and Technologies:</h3>
        <Marquee pauseOnHover className={css.marquee}>
          {firstRow.map(({ name, iconId }, index) => (
            <div key={index} className={css.skillList}>
              <span className={css.item}><Icon id={iconId} className={css.icon}/>{name}</span>
            </div>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className={css.marquee}>
          {secondRow.map(({ name, iconId }, index) => (
            <div key={index} className={css.skillList}>
              <span className={css.item}>
                <Icon id={iconId} className={css.icon}  />{name}</span>
            </div>
          ))}
        </Marquee>
      <ScrollableComponent>
        <div className={css.docBox}>
          <div className={css.education}>
            <h3 className={css.title}>Education</h3>
            <Link
              title="View Certificate"
              rel="noreferrer"
              target="_blank"
              to={
                "https://drive.google.com/file/d/1dBRSm8ID4ucfYNSoIxbyjqceRLZstCQQ/view?usp=sharing"
              }
            >
              <motion.img
                className={css.cv}
                src={certificate}
                alt="cv"
                whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }} 
              />
            </Link>
          </div>
          <div className={css.education}>
            <h3 className={css.title}>CV</h3>

            <Link
              title="View CV"
              rel="noreferrer"
              target="_blank"
              to={
                "https://drive.google.com/file/d/180nWHjQMIeO7E1NlPrZHdAYsYJNMN71u/view?usp=sharing"
              }
            >
              <motion.img
                className={css.cv}
                src={cv}
                alt="cv"
                whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' },
  }}
  initial={{ scale: 1 }} 
              />
            </Link>
          </div>
        </div>
      </ScrollableComponent>
    </div>
  );
};

export default AboutMe;


// const icon = [
//   "react", "javascript", "node-dot-js", "css3", "html5",
//   "nextdotjs", "typescript",
//   "axios", "mongodb", "material-ui", "redux", "express", "firebase",
//   "git", "github", "visualstudiocode", "figma", "emotionstyled", "postman", "vite",
//   "nodemailer", "jwt", "nodemon", "yup", "formik", "tailwindcss", "sass",
// "cssgrid", "parcel", "i18next", "vercel", "chatgpt","rest-api"
//   ];