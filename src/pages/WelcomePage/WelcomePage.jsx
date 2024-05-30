import { Link } from 'react-router-dom';
import css from './WelcomePage.module.css';
import icons from '../../assets/img/symbol-defs.svg';

const WelcomePage = () => {
  return (
    <div className={css.wrapper}>
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.globe}></div>
          <h2 className={css.firstFrame}>Welcome!</h2>
          <h2 className={css.secondFrame}>I am Kris,</h2>
          <h2 className={css.thirdFrame}>a Junior</h2>
          <h2 className={css.fourthFrame}>Full Stack Developer</h2>
      <h2 className={css.fifthFrame}>
        <span>Let me</span>
          <span> show you</span>
          <span> what I have</span>
          <span> created.</span>
      </h2>
      <Link className={css.circle} to="/CamperClub" title='View CamperClub'>
        <svg className={css.arrow}>
          <use href={`${icons}#icon-arrow`}></use>
            </svg>
            
      </Link>
        </div>
        </div>
    </div>
  )
};

export default WelcomePage;