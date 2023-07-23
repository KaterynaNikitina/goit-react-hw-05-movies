import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from 'services/movies-api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDetails();
  }, [movieId]);

  return error ? (
    <NotFound />
  ) : (
    <div>
      <Link to={backLinkRef.current}>&#8592; Go back to movie list</Link>
      <MovieInfo movie={movie} />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="review">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="review" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
