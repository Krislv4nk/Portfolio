

import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.wrapper}>
        <ul className={css.headerList}>
          <li className={css.linkItem}>
            
              <NavLink 
                to="/" 
                title="About me"
                className={({ isActive }) => `${css.headerItem} ${isActive ? css.active : ''}`} 
              >About me</NavLink>
           
          </li>
          <li className={css.linkItem}>
           
              <NavLink 
                to="/ProjectsPage" 
                title="Projects"
                className={({ isActive }) => `${css.headerItem} ${isActive ? css.active : ''}`} 
            >Projects</NavLink>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};


