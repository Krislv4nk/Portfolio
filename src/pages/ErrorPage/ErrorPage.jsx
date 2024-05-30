// import { Container, Title } from './ErrorPage.styled';
import { Link } from 'react-router-dom';
import css from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>404</h2>
<div className={css.linkContainer}>
      <Link className={css.link} to="/" title='Click Me!'>Click Me!
      <div className={css.clicker}></div>
      <div className={css.clicker}></div>
      <div className={css.clicker}></div>
      <div className={css.clicker}></div>
      <div className={css.clicker}></div>
      <div className={css.clicker}></div>
    </Link></div>
      <div className={css.astronaut}>
        <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
      </div>
    </div>
  );
};

export default ErrorPage;
