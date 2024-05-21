import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Background } from 'components/Background/Background';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <><Background/>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default SharedLayout;
