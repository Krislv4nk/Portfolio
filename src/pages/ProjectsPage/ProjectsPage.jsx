import css from './ProjectsPage.module.css';
import CamperClubPage from 'components/Projects/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'components/Projects/WaterTrackerPage/WaterTrackerPage';
import PhoneBookPage from 'components/Projects/PhoneBookPage/PhoneBookPage';
import FoodStorePage from 'components/Projects/FoodStorePage/FoodStorePage';
import LearnLingoPage from 'components/Projects/LearnLingoPage/LearnLingoPage';

const ProjectsPage = () => {
    
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Let me show you what I have created</h3>
                <ul className={css.list}>
                    <li><LearnLingoPage /></li>
                    <li><CamperClubPage /></li>
                    <li><WaterTrackerPage /></li>
                    <li><PhoneBookPage /></li>
                    <li><FoodStorePage /></li>
                </ul>
            
        </div>
    );
};

export default ProjectsPage;





