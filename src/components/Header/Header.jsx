
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';


export const Header = () => {
  
  return (
    <header className={css.header}>
      <nav className={css.wrapper}>
                <ul className={css.headerList}>
                    
                        <li ><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Welcome</NavLink></li>
            
            <li ><NavLink  className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/ProjectsPage">Projects</NavLink></li>
                        
          
          
                        </ul>
                </nav>
    </header>
  );
};
