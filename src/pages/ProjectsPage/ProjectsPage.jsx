
import { Link } from 'react-router-dom';
import css from './ProjectsPage.module.css';
import icons from '../../assets/img/symbol-defs.svg';


const ProjectsPage = () => {
    return (

        <div className={css.wrapper}>
            <h2 className={css.title}>Projects</h2>
           
                <ul className={css.list}>
                    
                        
                        
                        <li className={css.projectItem}><Link className={css.item} to="/CamperClub" title='CamperClub'>CamperClub</Link><svg className={css.project}>
          <use href={`${icons}#icon-menu`}></use>
            </svg></li>

                       <li className={css.projectItem}><Link className={css.item} to="/WaterTracker" title='WaterTracker'>Water tracker</Link><svg className={css.project}>
          <use href={`${icons}#icon-menu`}></use>
            </svg></li>
            
            <li className={css.projectItem}><Link className={css.item} to="/PhoneBook" title='PhoneBook'>Phone Book</Link><svg className={css.project}>
          <use href={`${icons}#icon-menu`}></use>
            </svg></li>
            
            <li className={css.projectItem}><Link className={css.item} to="/FoodStore" title='FoodStore'>Food Store</Link><svg className={css.project}>
          <use href={`${icons}#icon-menu`}></use>
            </svg></li>
          
          
                        </ul>
               
            
        </div>
    )
};

export default ProjectsPage;