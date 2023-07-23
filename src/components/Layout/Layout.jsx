import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, NavList, Link } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </NavList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
