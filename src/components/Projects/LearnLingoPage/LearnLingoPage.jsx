import { useState } from 'react';
import cover1 from '../../../assets/img/cover1.jpg';
import cover2 from '../../../assets/img/cover2.jpg';
import cover3 from '../../../assets/img/cover3.jpg';
import css from '../CamperClubPage/CamperClubPage.module.css';
import icons from '../../../assets/sprite.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollableComponent } from '../../ScrollableComponent/ScrollableComponent';




const LearnLingoPage = () => {
const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`${css.wrapper} ${isExpanded ? css.expanded : ''}`}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>LearnLingo</h2>
        <div className={css.container}>
<div className={css.listWrapper}>
       <motion.img className={css.imgCamper} src={cover1} alt="camper" whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
              <motion.img className={css.imgCamper} src={cover2} alt="camper" whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
              <motion.img  className={css.imgCamper} src={cover3} alt="camper" whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
       </div>
      <ul className={css.linksWrapper}>
           <li className={css.linksItem}> <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
              <Link className={css.links} to="https://krislv4nk.github.io/LearnLingo/" rel="noreferrer" target='_blank'
            title="View Live Demo of LearnLingo">Live Demo</Link></li>
        <li className={css.linksItem}><svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
              <Link className={css.links} to="https://github.com/Krislv4nk/LearnLingo" rel="noreferrer" target='_blank'
          title="View Front-End Code on GitHub">Front-End GitHub</Link></li>
          </ul>
          </div>
      </div>
      <button className={css.toggleExpand} onClick={toggleExpand} type='button'>
                {isExpanded ? 'Show less' : 'Read more'}
            </button>
       {isExpanded && (
        <ScrollableComponent>
          <div className={css.descriptionWrapper}>
            <h4 className={css.descriptionTitle}>Individual Project</h4>
            <p className={css.description}>The Teachers App is a web application built with Firebase
              and React for viewing and interacting with a teacher database. Users can register,
              log in, view profiles, save favorites, and book trial lessons. Firebase ensures real-time updates
              and secure user management.</p>
            <h4 className={css.descriptionTitle}>Key Features:</h4>
            <ul className={css.featuresList}>
              <li className={css.featuresItem}>  Authentication & Registration: Users can register, log in, and manage their sessions using Firebase Authentication. Forms are created with react-hook-form and yup for validation.</li>
              <li className={css.featuresItem}> Teacher Cards: The Teachers page shows teacher profiles in card format with an option to load more. Users can favorite teachers with a “heart” button. Favorites are saved in Firebase or localStorage for authorized users.</li>
              <li className={css.featuresItem}> Interactivity: Favorites persist on page refresh. Users can remove favorites, access detailed teacher info, and book trial lessons through modal forms.</li >
              <li className={css.featuresItem}> Private Favorites Page: Authorized users can view their saved favorite teachers on a dedicated page.</li >
              <li className={css.featuresItem}> Color Palette Customization: Users can adjust the app&apos;s color scheme to their preference..</li >
            </ul >
            <h4 className={css.descriptionTitle}>Tools: </h4>
            <ul className={css.toolsList}>
              <li className={css.tool}>React,</li>
              <li className={css.tool}>react-router-dom,</li>
              <li className={css.tool}>Firebase,</li>
              <li className={css.tool}>MUi (Material-UI),</li>
              <li className={css.tool}>uuid,</li>
              <li className={css.tool}>react-select,</li>
              <li className={css.tool}>Formik,</li>
              <li className={css.tool}>Yup;</li>
            </ul>
            <p className={css.description}>Duration: 6 weeks</p>
          </div>
        </ScrollableComponent>
      )}
    </div>
  );
};

export default LearnLingoPage;



