import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SecondPage from 'pages/SecondPage/SecondPage';
import ThirdPage from 'pages/ThirdPage/ThirdPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';




function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/second" element={<SecondPage />}/>
            <Route path="/third" element={<ThirdPage />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
