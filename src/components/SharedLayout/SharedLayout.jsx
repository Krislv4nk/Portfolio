import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Header } from './Header/Header';
import { Container } from './Container/Container';
import { Loader } from './Loader/Loader';
import { Background } from '../Background/Background';
import About from 'pages/About/About';
import { useTransition, animated } from 'react-spring';

const SharedLayout = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 400 },
  });

  return (
    <>
      <Header />
      <SimpleBar style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}>
        <Background />
      </div>

      <Container>
        <About />
        {transitions((style, item) => (
          <animated.div style={style}>
            <Suspense fallback={<Loader />}>
              <Outlet location={item} />
            </Suspense>
          </animated.div>
        ))}
        </Container>
      </SimpleBar>
    </>
  );
};

export default SharedLayout;

