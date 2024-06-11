
import { useState, useEffect } from 'react';
import css from './ProjectsPage.module.css';
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';


const ProjectsPage = () => {
    
    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || null);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'CamperClub':
                return <CamperClubPage className={css.tabContent}/>;
            case 'WaterTracker':
                return <WaterTrackerPage  className={css.tabContent}/>;
            case 'PhoneBook':
                return <PhoneBookPage className={css.tabContent}/>;
            case 'FoodStore':
                return <FoodStorePage className={css.tabContent}/>;
            default:
            return (
            <p className={css.typing}>Please select a project to view.</p>
            );
        }
    };
    return (
        <div className={css.wrapper}>
            <h2 className={css.fifthFrame}>
        <span>Let me</span>
          <span> show you</span>
          <span> what I have</span>
          <span> created.</span>
      </h2>
            <ul className={css.list}>
                <li className={css.projectItem}>
            <button className={`${css.item} ${activeTab === 'CamperClub' ? css.active : ''}`}
              onClick={() => setActiveTab('CamperClub')} title='CamperClub'>
                        CamperClub
                    </button>
                    
                </li>
                <li className={css.projectItem}>
            <button className={`${css.item} ${activeTab === 'WaterTracker' ? css.active : ''}`}
              onClick={() => setActiveTab('WaterTracker')} title='WaterTracker'>
                        Water Tracker
                    </button>
                    
                </li>
                <li className={css.projectItem}>
            <button className={`${css.item} ${activeTab === 'PhoneBook' ? css.active : ''}`}
              onClick={() => setActiveTab('PhoneBook')} title='PhoneBook'>
                        Phone Book
                    </button>
                    
                </li>
                <li className={css.projectItem}>
            <button className={`${css.item} ${activeTab === 'FoodStore' ? css.active : ''}`}
              onClick={() => setActiveTab('FoodStore')} title='FoodStore'>
                        Food Store
                    </button>
                    
                </li>
            </ul>
            <div className={css.tabContent}>
                
                {renderTabContent()}
            </div>
        </div>
    );
};

export default ProjectsPage;
