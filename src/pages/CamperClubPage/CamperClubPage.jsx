

import camper from '../../assets/img/camper.png';
import camperA from '../../assets/img/camper-1.png';
import css from './CamperClubPage.module.css';
import icons from '../../assets/img/symbol-defs.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollableComponent } from '../../components/ScrollableComponent/ScrollableComponent';

const CamperClubPage = () => {

  return (
    <div className={css.wrapperRight}>
      <div className={css.titleContainer}>
        <div>
      <h2 className={css.title}>CamperClub</h2>
      <ul className={css.linksWrapper}>
           <li className={css.linksItem}> <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
              <Link className={css.links} to="https://krislv4nk.github.io/CamperClub/" rel="noreferrer" target='_blank'
            title="View Live Demo of CamperClub">Live Demo</Link></li>
        <li className={css.linksItem}><svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
              <Link className={css.links} to="https://github.com/Krislv4nk/CamperClub" rel="noreferrer" target='_blank'
          title="View Front-End Code on GitHub">Front-End GitHub</Link></li>
      </ul>
</div>
      <div className={css.listWrapper}>
       <motion.img className={css.imgCamper} src={camper} alt="camper" whileHover={{ scale: 1.5 }}/>
        <motion.img  className={css.imgCamper} src={camperA} alt="camper" whileHover={{ scale: 1.5 }}/>
        </div>
        </div>
      <ScrollableComponent>
        <div className={css.descriptionWrapper}>
<h4 className={css.descriptionTitle}>Individual Project</h4>
          <p className={css.description}>Introducing my latest venture: the premier individual project following my
            graduation from IT school. Meet the
            React-powered camper rental website, complete with Redux integration! Immerse yourself in a seamless
            browsing experience
            as you explore our collection of available campers. From detailed descriptions to captivating visuals, each
            camper page
            offers a glimpse into your next adventure. Plus, with the ability to add your favorite finds to a
            personalized favorites
            list, planning your dream getaway has never been easier. Join us as we redefine the way adventurers connect
            with their
            ideal camper experience. Welcome to a world of exploration, all at your fingertips.</p>
<h4 className={css.descriptionTitle}>Key Features:</h4>
        <ul className={css.featuresList}>
           <li className={css.featuresItem}>  Browse Campers: Users can browse a list of available campers with images, prices, and other details.</li>
            <li className={css.featuresItem}> Camper Details: Each camper has a dedicated page with detailed information, including description,
            location, rating,
            reviews, and specifications.</li>
            <li className={css.featuresItem}> Add to Favorites: Users can add campers to their favorites list and remove them from it.
            </li >
            </ul >
          <h4 className={css.descriptionTitle}>Tools: </h4>
            <ul className={css.toolsList}>
                <li className={css.tool}>React,</li>
                <li className={css.tool}>Redux,</li>
                <li className={css.tool}>MUi (Material-UI),</li>
                <li className={css.tool}>Axios,</li>
                <li className={css.tool}>Formik,</li>
                <li className={css.tool}>Yup;</li>
              </ul>
          <p className={css.description}>Duration: 3 weeks</p>
          </div>
        </ScrollableComponent>
    </div>
  );
};

export default CamperClubPage;
