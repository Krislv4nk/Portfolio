import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';


const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}/>
            <Route path="/third" element={<HalfPage />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
