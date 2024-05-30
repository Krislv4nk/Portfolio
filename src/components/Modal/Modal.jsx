import { NavLink } from 'react-router-dom';


import css from './Modal.module.css';
export const Modal = () => {
    return (
        <div  className={css.modal}>
             <nav className={css.wrapper}>
                <ul className={css.headerList}>
                    
                        <li ><NavLink id='welcome' className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Welcome</NavLink></li>
                        
                        <li ><NavLink id='CamperClub' className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/CamperClub">CamperClub</NavLink></li>

                       <li ><NavLink id='WaterTracker' className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/WaterTracker">Water tracker</NavLink></li>
            
            <li ><NavLink id='PhoneBook' className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/PhoneBook">Phone Book</NavLink></li>
            
            <li ><NavLink id='FoodStore' className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/FoodStore">Food Store</NavLink></li>
          
          
                        </ul>
                </nav>
            
        </div>
    );
}