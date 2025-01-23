

import { useTransition, animated } from 'react-spring';
import { useLocation, Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import AboutAndProjects from 'pages/AboutAndProjects/AboutAndProjects';



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
              <Route index element={<AboutAndProjects />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </animated.div>
      ))}
    </div>
  );
}

export default App;

 

