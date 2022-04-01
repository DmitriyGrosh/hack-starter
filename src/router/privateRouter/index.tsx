import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import Header from '../../widgets/Header';
import Container from '../../shared/ui/container';

const PrivateRouter = () => {
  const { accessToken, isLoading, email } = useAppSelector((state) => state.auth);
  console.log('==========>email', email);
  console.log('==========>isLoading', isLoading);
  console.log('==========>1111', 1111);

  return accessToken ? (
    <>
      <Header />
      <div className="main-container">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
