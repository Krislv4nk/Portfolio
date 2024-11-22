import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './AboutMe.module.css';
import cv from '../../assets/cv.jpg';
import certificate from '../../assets/certificate.jpg';
import myPhoto from '../../assets/img/mainPhoto.png';
import { ScrollableComponent } from '../../components/ScrollableComponent/ScrollableComponent';


const AboutMe = () => {
    return (
          <div className={css.wrapper}>
                <div className={css.container}>
                       <img className={css.photo} src={myPhoto} alt="myPhoto" />
            <p className={css.text}><span className={css.helloSpan}>Hello</span>,<br/> I am Kristina, a junior full-stack developer.
                I am eager to wholeheartedly dive into the world of programming.
                My skills and knowledge are constantly evolving, and I am always
                open to new challenges and opportunities for growth. I dream
                of working in a team and learning from experienced colleagues
                to become a true professional in my field. My goal is to combine my
                            creative passion for learning and development to create quality and innovative products.</p>
                </div>
                <ScrollableComponent>
            <h3 className={css.title}>Hard skills</h3>
<ul className={css.list}>
  <li className={css.item}>HTML5</li>
  <li className={css.item}>CSS3</li>
  <li className={css.item}>JavaScript</li>
  <li className={css.item}>React.js</li>
  <li className={css.item}>Node.js</li>
  <li className={css.item}>Next.js</li>
  <li className={css.item}>TypeScript</li>
  <li className={css.item}>Redux</li>
  <li className={css.item}>Express</li>
  <li className={css.item}>Git</li>
  <li className={css.item}>VS Code</li>
  <li className={css.item}>Figma</li>
  <li className={css.item}>Postman</li>
  <li className={css.item}>JWT</li>
  <li className={css.item}>Nodemon</li>
  <li className={css.item}>Axios</li>
                      </ul>
                </ScrollableComponent>
                <ScrollableComponent>
                <div className={css.docBox}>
                      <div className={css.education}>
            <h3 className={css.title}>Education</h3>
                            <Link title='View Certificate' rel="noreferrer" target='_blank'
                                  to={'https://drive.google.com/file/d/1dBRSm8ID4ucfYNSoIxbyjqceRLZstCQQ/view?usp=sharing'}>
                            <motion.img className={css.cv} src={certificate} alt="cv"
                            whileHover={{ scale: 1.2 }}
                        /></Link>
                      </div>
                      <div className={css.education}>
                      <h3 className={css.title}>CV</h3>
                      
                            <Link title='View CV' rel="noreferrer" target='_blank'
                                  to={'https://drive.google.com/file/d/180nWHjQMIeO7E1NlPrZHdAYsYJNMN71u/view?usp=sharing'}>
                           <motion.img className={css.cv} src={cv} alt="cv"
                            whileHover={{ scale: 1.2 }}
                                        /></Link></div></div>
                      </ScrollableComponent>
        </div>
    )
}

export default AboutMe;