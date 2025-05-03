import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/SharedLayout/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Background } from 'components/Background/Background.jsx';
import AboutMe from 'pages/AboutMe/AboutMe';

const SharedLayout = () => {
  return (

    <>
      <Background/>
      <Container>
        <Header />
        <AboutMe/>
      <Suspense fallback={<Loader />}>
        <Outlet />
          </Suspense>
        </Container>
    </>
  );
};

export default SharedLayout;
