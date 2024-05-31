
import { Link } from 'react-router-dom';
import css from './ProjectsPage.module.css';



const ProjectsPage = () => {
    return (

        <div className={css.wrapper}>
            <h2 className={css.title}>Projects</h2>
           
                <ul className={css.list}>
                    
                        
                        
                        <li ><Link className={css.item} to="/CamperClub" title='CamperClub'>CamperClub</Link></li>

                       <li ><Link className={css.item} to="/WaterTracker" title='WaterTracker'>Water tracker</Link></li>
            
            <li ><Link className={css.item} to="/PhoneBook" title='PhoneBook'>Phone Book</Link></li>
            
            <li ><Link className={css.item} to="/FoodStore" title='FoodStore'>Food Store</Link></li>
          
          
                        </ul>
               
            
        </div>
    )
};

export default ProjectsPage;