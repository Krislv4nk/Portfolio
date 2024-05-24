import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import CamperClubPage from 'pages/CamperClubPage/CamperClubPage';
import WaterTrackerPage from 'pages/WaterTrackerPage/WaterTrackerPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import FoodStorePage from 'pages/FoodStorePage/FoodStorePage';
import PhoneBookPage from 'pages/PhoneBookPage/PhoneBookPage';



function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/CamperClub" element={<CamperClubPage />}/>
          <Route path="/WaterTracker" element={<WaterTrackerPage />} />
          <Route path="/PhoneBook" element={<PhoneBookPage />} />
          <Route path="/FoodStore" element={<FoodStorePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;