
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import icons from '../../assets/img/symbol-defs.svg';



export const Header = () => {
  
  return (
    <header className={css.header}>
      <nav className={css.wrapper}>
                <ul className={css.headerList}>
                    
                        <li ><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end><svg className={css.icon} title='Welcome'>
          <use href={`${icons}#icon-screen`}></use>
            </svg></NavLink></li>
          
            
            <li ><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/ProjectsPage" title='Projects'><svg className={css.icon}>
          <use href={`${icons}#icon-briefcase`}></use>
            </svg></NavLink></li>

          <li ><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/AboutMe" title='About me'><svg className={css.icon}>
          <use href={`${icons}#icon-user`}></use>
            </svg></NavLink></li>
          
          
                        </ul>
                </nav>
    </header>
  );
};
