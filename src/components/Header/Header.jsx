
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import hero from '../../assets/img/laptop.jpg';
import myPhoto from '../../assets/img/mainPhoto.png';

export const Header = () => {
  
  return (
    <header className={css.header}>
      <img className={css.hero} src={hero} alt="hero" />
      <div className={css.wrapper}>
        <img className={css.photo} src={myPhoto} alt="myPhoto" />
      <nav className={css.wrapper}>
                <ul className={css.headerList}>
                        <li className={css.linkItem}><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" title='About me' end>About me</NavLink></li>
          
            
            <li className={css.linkItem}><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/ProjectsPage" title='Projects'>Projects</NavLink></li>
                        </ul>
                </nav></div>
    </header>
  );
};
