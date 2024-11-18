

import { useTransition, animated } from 'react-spring';
import { useLocation, Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import LearnLingoPage from 'pages/LearnLingoPage/LearnLingoPage';
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
import AboutMe from 'pages/AboutMe/AboutMe';

function App() {
  const location = useLocation();

  

  const transitions = useTransition(location, {
  from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  leave: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
  config: { duration: 400 },
});

  return (
    <div>
      {transitions((props, item) => (
        <animated.div style={props}>
          <Routes location={item}>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<AboutMe />} />
              <Route path="/ProjectsPage" element={<ProjectsPage />}>
                <Route path="LearnLingo" element={<LearnLingoPage />} />
                <Route path="CamperClub" element={<CamperClubPage />} />
                <Route path="WaterTracker" element={<WaterTrackerPage />} />
                <Route path="PhoneBook" element={<PhoneBookPage />} />
                <Route path="FoodStore" element={<FoodStorePage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </animated.div>
      ))}
    </div>
  );
}

export default App;



