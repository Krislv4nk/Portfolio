import css from '../CamperClubPage/CamperClubPage.module.css';
import icons from '../../../assets/sprite.svg';
import phone from '../../../assets/img/phone.png';
import phoneBook from '../../../assets/img/phone-book.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollableComponent } from '../../ScrollableComponent/ScrollableComponent';


const PhoneBookPage = () => {
  return <div className={css.wrapperRight}>
    <div className={css.titleContainer}>
        <div>
    <h2 className={css.title}>PhoneBook</h2>
    <ul className={css.linksWrapper}>
      <li className={css.linksItem}>
                <svg className={css.repoLinkIcon} >
          <use href={`${icons}#icon-link`}></use>
        </svg>
          <Link className={css.links} to="https://krislv4nk.github.io/goit-react-hw-08-phonebook/" rel="noreferrer" target='_blank'
                  title="View Live Demo of PhoneBook App">Live Demo</Link>
              </li>
              <li className={css.linksItem}>
                <svg className={css.repoLinkIcon}>
          <use href={`${icons}#icon-link`}></use>
        </svg>
            <Link className={css.links} to="https://github.com/Krislv4nk/goit-react-hw-08-phonebook" rel="noreferrer" target='_blank'
                  title="View Front-End Code on GitHub">Front-End GitHub</Link>
              </li>
        </ul>
        </div>
            <div className={css.listWrapper}>
        <motion.img className={css.phoneBook} src={phoneBook} alt="camper" whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
        <motion.img  className={css.imgPhone} src={phone} alt="camper" whileHover={{
    scale: 1.5, 
    transition: { duration: 0.5, ease: 'easeInOut' }, 
  }}
  initial={{ scale: 1 }}/>
      </div>
      </div>
    <ScrollableComponent>
      <div className={css.descriptionWrapper}>
          <h4 className={css.descriptionTitle}>Individual project</h4>

          <p className={css.description}>Within this individual project, I implemented restricted routes accessible
            exclusively to registered users. When a user
            attempts to access these restricted routes without being logged into their account, they are automatically
            redirected to
            either the login or registration page. This feature ensures that only authorized users can navigate through
            the
            protected sections of the program, enhancing both security and user experience.The project enables users to
            store and manage contacts using the capabilities of the React framework and additional
            libraries such as Redux Toolkit, React Router, Formik, and more. Additionally, MUI and Emotion libraries are
            used for
            styling icons and interface components. This project is implemented following best practices in web
            development and
            includes testing to confirm its functionality</p>
    <h4 className={css.descriptionTitle}>Tools: </h4>
              <ul className={css.toolsList} >
                <li className={css.tool}>React,</li>
                <li className={css.tool}>Redux,</li>
                <li className={css.tool}>MUi (Material-UI),</li>
                <li className={css.tool}>Axios,</li>
                <li className={css.tool}>Formik,</li>
                <li className={css.tool}>Yup;</li>
              </ul>
          <p className={css.description}>Duration: 2 weeks</p>
</div>
   </ScrollableComponent>
            </div >;
};

export default PhoneBookPage;