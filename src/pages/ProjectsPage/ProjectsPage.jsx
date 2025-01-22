
import { useState, useEffect, useRef } from 'react';
import css from './ProjectsPage.module.css';
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';
import LearnLingoPage from 'pages/LearnLingoPage/LearnLingoPage';
import symbol from '../../assets/symbol.svg';

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState(null);

    const iconRefs = useRef([]); 

    useEffect(() => {
        iconRefs.current.forEach(icon => {
            if (icon) {
                const paths = icon.querySelectorAll('path');
                paths.forEach(path => {
                    const length = path.getTotalLength();
                    path.style.strokeDasharray = length;
                    path.style.strokeDashoffset = length;
                    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
                    path.style.strokeDashoffset = '0';
                });
            }
        });
    }, [activeTab]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'LearnLingo':
                return <LearnLingoPage className={css.tabContent} />;
            case 'CamperClub':
                return <CamperClubPage className={css.tabContent} />;
            case 'WaterTracker':
                return <WaterTrackerPage className={css.tabContent} />;
            case 'PhoneBook':
                return <PhoneBookPage className={css.tabContent} />;
            case 'FoodStore':
                return <FoodStorePage className={css.tabContent} />;
            default:
                return (
                    <p className={css.typing}>Please select a project to view.</p>
                );
        }
    };

    return (
        <div className={css.wrapper}>
                       <h3 className={css.title}>
                Let me show you what I have created
            </h3>
            <ul className={css.list}>
                {[
                    { name: 'LearnLingo', iconId: 'icon-Vector-1' },
                    { name: 'CamperClub', iconId: 'icon-camper' },
                    { name: 'WaterTracker', iconId: 'icon-Vector-3' },
                    { name: 'PhoneBook', iconId: 'icon-bi_phone' },
                    { name: 'FoodStore', iconId: 'icon-Vector-4' },
                ].map(({ name, iconId }, index) => (
                    <li
                        key={name}
                        className={index % 2 === 0 ? css.projectItemLeft : css.projectItem}
                    >
                        <button
                            className={`${css.item} ${activeTab === name ? css.active : ''}`}
                            onClick={() => setActiveTab(name)}
                            title={name}
                        ><svg
                                className={css.icon}
                                ref={el => (iconRefs.current[index] = el)}
                            >
                                <use xlinkHref={`${symbol}#${iconId}`}></use>
                            </svg>
                            <span className={css.spanName}>{name}</span>
                        </button>
                    </li>
                    
                ))}
                </ul>
            <div className={css.tabContent}>{renderTabContent()}</div>
        </div>
    );
};

export default ProjectsPage;




