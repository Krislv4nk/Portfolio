import css from '../CamperClubPage/CamperClubPage.module.css';
import icons from '../../assets/img/symbol-defs.svg';
import food from '../../assets/img/food.jpg';
import food1 from '../../assets/img/food2.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollableComponent } from '../../components/ScrollableComponent/ScrollableComponent';


const FoodStorePage = () => {
  return <div className={css.wrapper}>
    <div className={css.titleContainer}>
        <div>
    <h2 className={css.title}>FoodStore</h2>
      <ul className={css.linksWrapper}>
          
      <li className={css.linksItem}>
                <svg className={css.repoLinkIcon} >
          <use href={`${icons}#icon-link`}></use>
        </svg>
          <Link className={css.links} to="https://vuktorts.github.io/js-team-project-FoodStore/" 
                title="View Live Demo of FoodStore"  rel="noreferrer" target='_blank'>Live Demo</Link>
              </li>
              <li className={css.linksItem}>
                <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
            <Link className={css.links} to="https://github.com/VuktorTS/js-team-project-FoodStore"  rel="noreferrer" target='_blank'
                  title="View Front-End Code on GitHub">Front-End GitHub</Link>
              </li>
        </ul>
        </div>
            <div className={css.listWrapper}>
    <motion.img className={css.imgCamper} src={food} alt="camper" whileHover={{ scale: 1.5 }}/>
        <motion.img  className={css.imgCamper} src={food1} alt="camper" whileHover={{ scale: 1.5 }}/>
      </div>
      </div>
    <ScrollableComponent>
      <div className={css.descriptionWrapper}>
          <h4 className={css.descriptionTitle}>Team project</h4>

          <p className={css.description}>For the Food-Store project, I collaborated as part of a team working with
            Vanilla JavaScript, API integration, and
            Parcel bundler. My role involved the development of two critical sections on the main page: Popular
            Products
            and
            Discount Products.

            The website boasts a responsive layout ensuring seamless user experience across devices. Additionally, I
            implemented
            modal windows, contact forms, filter functionality, and pagination to enhance user interaction and
            streamline
            navigation.

            By contributing to this project, I honed my skills in front-end development, particularly in JavaScript,
            while
            also
            gaining valuable experience in API integration and responsive design. This project exemplifies my ability to
            work
            effectively within a team to deliver a high-quality web application that meets both client requirements and
            user
            expectations.</p>
        <p className={css.description}>Duration: 1 week</p>
        </div>
    </ScrollableComponent>
    </div >;
    };

export default FoodStorePage;