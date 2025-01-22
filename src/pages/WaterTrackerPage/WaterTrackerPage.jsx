import css from '../CamperClubPage/CamperClubPage.module.css';
import icons from '../../assets/sprite.svg';
import water from '../../assets/img/water.jpg';
import water1 from '../../assets/img/water1.jpg';
import water2 from '../../assets/img/water2.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollableComponent } from '../../components/ScrollableComponent/ScrollableComponent';



const WaterTrackerPage = () => {
  return <div className={css.wrapper}>
    <div className={css.titleContainer}>
        <div>
    <h2 className={css.title}>Water-tracker</h2>
    
   
    <ul className={css.linksWrapper}>
      <li className={css.linksItem}>
                <svg className={css.repoLinkIcon} >
          <use href={`${icons}#icon-link`}></use>
        </svg>
        <Link className={css.links} to="https://andriipolishchuk28.github.io/water-tracker-frontend/"
          rel="noreferrer" target='_blank'
                  title="View Live Demo of Water Tracker App">Live Demo</Link>
              </li>
              <li className={css.linksItem}>
                <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
        <Link className={css.links} to="https://github.com/AndriiPolishchuk28/water-tracker-frontend/"
          rel="noreferrer" target='_blank'
                  title="View Front-End Code on GitHub">Front-End GitHub</Link>
              </li>
              <li className={css.linksItem}>
                <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
            <Link className={css.links} to="https://github.com/SerhiiOberemchuk/watertracker-backand-codekartel/" 
                  rel="noreferrer" target='_blank' title="View Back-End Code on GitHub">Back-End GitHub</Link>
              </li>
      </ul>
      </div>
      <div className={css.listWrapper}>
       <motion.img src={water} alt="water" className={css.imgCamper} whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
              <motion.img src={water1} alt="water" className={css.imgCamper} whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
              <motion.img src={water2} alt="water" className={css.imgCamper} whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
      </div>
            </div>
    <ScrollableComponent>
      <div className={css.descriptionWrapper}>
          <h4 className={css.descriptionTitle}>Team project</h4>

          <p className={css.description}>The web application is designed for tracking daily water intake and consists of the following functional components:

1. Home Page: This is the landing page where users can get an overview of their water intake statistics, set goals, and access other features.

2. Water Journal: This section allows users to log their daily water consumption. Users can input the amount of water consumed at different times throughout the day and view their hydration progress over time.

3. Settings: The settings page enables users to customize their experience, such as setting reminders for drinking water, adjusting units of measurement, and managing account preferences.</p>
<h4 className={css.descriptionTitle}>Key Features:</h4>
<ul className={css.featuresList}>

<li className={css.featuresItem}> Private and Public Routes: The application implements private routes, which require user authentication, and public routes, accessible to all users. Private routes ensure data security and restrict unauthorized access to sensitive information.</li >

<li className={css.featuresItem}> Backend Functionality: The application is powered by a backend system that manages user data, handles authentication, and facilitates communication between the frontend and the database. This backend infrastructure ensures the smooth functioning of features like data storage, retrieval, and security.</li >

<li className={css.featuresItem}> Adaptation for Different Devices: The application is optimized for various devices, including desktops, tablets, and mobile phones. It utilizes responsive design principles to ensure a seamless user experience across different screen sizes and resolutions.

      By incorporating these enhancements, the description provides a clearer understanding of the Water-Tracker-APP project&apos;s functionality and features, encompassing both frontend and backend components.</li >
    </ul>
    <h4 className={css.descriptionTitle}>Tools: </h4>
          
            <h4 className={css.descriptionTitle}>Frontend:</h4>
              <ul className={css.toolsList} >
                <li className={css.tool}>React,</li>
                <li className={css.tool}>Redux,</li>
                <li className={css.tool}>MUi (Material-UI),</li>
                <li className={css.tool}>Axios,</li>
                <li className={css.tool}>Formik,</li>
                <li className={css.tool}>Yup;</li>
              </ul>
            
            <h4 className={css.descriptionTitle}>Backend:</h4>
              <ul className={css.toolsList}>
                <li className={css.tool}>Node.js,</li>
                <li className={css.tool}>Express,</li>
                <li className={css.tool}>Nodemon,</li>
                <li className={css.tool}>JWT (JSON Web Tokens);</li>
              </ul>
           
         
          <p className={css.description}>Duration: 2 weeks</p>
          <p className={css.description}>Role: on Front-End - Implemented logic for SignUp/SignIn pages (Redux, Axios,
            Formik, Yup),
            component MyDailyNorma with
          modal-window (MUI), component Background; on Back-End - Implemented logic for TodayWater component. </p>
        </div>
   </ScrollableComponent>
  </div >;
};

export default WaterTrackerPage;
