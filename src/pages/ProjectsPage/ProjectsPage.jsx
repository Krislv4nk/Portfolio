
import { useState } from 'react';
import Slider from 'react-slick';
import css from './ProjectsPage.module.css';
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';
import LearnLingoPage from 'pages/LearnLingoPage/LearnLingoPage';

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState(null);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'LearnLingo':
                return <LearnLingoPage className={css.tabContent}/>;
            case 'CamperClub':
                return <CamperClubPage className={css.tabContent}/>;
            case 'WaterTracker':
                return <WaterTrackerPage className={css.tabContent}/>;
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

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setActiveTab(tabs[current].id)
    };

    const tabs = [
        { id: 'LearnLingo', label: 'LearnLingo' },
        { id: 'CamperClub', label: 'CamperClub' },
        { id: 'WaterTracker', label: 'WaterTracker' },
        { id: 'PhoneBook', label: 'PhoneBook' },
        { id: 'FoodStore', label: 'FoodStore' }
    ];

    return (
        <div className={css.wrapper}>
            <h2 className={css.fifthFrame}>Let me show you what I have created</h2>
            <Slider {...settings}>
                {tabs.map(tab => (
                    <div key={tab.id} className={css.tabSlide}>
                        <button
                            className={`${css.item} ${activeTab === tab.id ? css.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                            title={tab.label}
                        >
                            {tab.label}
                        </button>
                    </div>
                ))}
            </Slider>
            <div className={css.tabContent}>
                {renderTabContent()}
            </div>
        </div>
    );
};

export default ProjectsPage;

