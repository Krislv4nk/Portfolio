import css from './ProjectsPage.module.css';
import CamperClubPage from 'components/Projects/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'components/Projects/WaterTrackerPage/WaterTrackerPage';
import PhoneBookPage from 'components/Projects/PhoneBookPage/PhoneBookPage';
import FoodStorePage from 'components/Projects/FoodStorePage/FoodStorePage';
import LearnLingoPage from 'components/Projects/LearnLingoPage/LearnLingoPage';
import { ScrollableComponent } from "../../components/ScrollableComponent/ScrollableComponent";

const ProjectsPage = () => {
    
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Let me show you what I have created</h3>
                <ul className={css.list}>
                     <ScrollableComponent><li><LearnLingoPage /></li></ScrollableComponent>
                    <ScrollableComponent><li><CamperClubPage /></li></ScrollableComponent>
                    <ScrollableComponent><li><WaterTrackerPage /></li></ScrollableComponent>
                    <ScrollableComponent><li><PhoneBookPage /></li></ScrollableComponent>
                    <ScrollableComponent><li><FoodStorePage /></li></ScrollableComponent>
                </ul>
            </div>
    );
};

export default ProjectsPage;





