import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Background } from 'components/Background/Background';

const SharedLayout = () => {
  return (

    <>
      <Container>
     <Background/>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
          </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
