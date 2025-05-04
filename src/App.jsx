

import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

 

