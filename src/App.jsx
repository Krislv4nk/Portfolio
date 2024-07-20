
import { useState, useEffect} from "react";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import LearnLingoPage from 'pages/LearnLingoPage/LearnLingoPage'
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
import AboutMe from 'pages/AboutMe/AboutMe';
import { Loader } from 'components/Loader/Loader';



function App() {
  
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);

 
  if (isLoading) {
    return <Loader />;
  }
  
 
  return (
   
      <Routes >
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
    
  );
}

export default App;
