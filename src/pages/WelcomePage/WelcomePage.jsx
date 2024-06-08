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
          <h2 className={css.secondFrame}>I am Junior</h2>
          <h2 className={css.thirdFrame}>Full Stack Developer</h2>
      <h2 className={css.fifthFrame}>
        <span>Let me</span>
          <span> show you</span>
          <span> what I have</span>
          <span> created.</span>
      </h2>
      <Link className={css.circle} to="/ProjectsPage" title='View Projects'>
        <svg className={css.arrow}>
          <use href={`${icons}#icon-page`}></use>
            </svg>
            
      </Link>
        </div>
        </div>
    </div>
  )
};

export default WelcomePage;