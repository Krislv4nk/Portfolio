import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/SharedLayout/Container/Container';
import { Loader } from './Loader/Loader';
import { Background } from 'components/Background/Background.jsx';
import About from 'pages/About/About';
import css from 'components/Header/Header.module.css';

const SharedLayout = () => {
  return (

    <>
  <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}>
    <Background />
  </div>
      <Container>
    <div className={css.headerWrapper}>
          <Header />
        </div>
    <About />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Container>
</>
  );
};

export default SharedLayout;
