import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Background } from 'components/Background/Background';
import { Footer } from 'components/Footer/Footer';
import {Container} from 'components/Container/Container';

const SharedLayout = () => {
  return (

    <>
      <Container>
      <Background />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default SharedLayout;
