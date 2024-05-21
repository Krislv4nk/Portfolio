import { NavLink } from 'react-router-dom';

import css from './Modal.module.css';
export const Modal = () => {
    return (
        <div className={css.modal}>
             <nav className={css.wrapper}>
                <ul className={css.headerList}>
                    
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Welcome</NavLink></li>
                        
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/second">CamperClub</NavLink></li>

                       <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/third">Water tracker</NavLink></li>
          
          
                        </ul>
                </nav>
            
        </div>
    );
}