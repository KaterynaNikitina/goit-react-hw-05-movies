import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';

import Loader from "./Loader/Loader";
import Layout from "./Layout/Layout";

const Home = lazy(() => import ('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 32,
        color: '#010101'
      }}
    >
      <Suspense fallback={<Loader />}>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/movies' element={<Movies /> }></Route>
        <Route path='/movies/:movieId/*' element={<MovieDetails />}></Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>
     </Routes>
     </Suspense>
    </div>
  );
};


