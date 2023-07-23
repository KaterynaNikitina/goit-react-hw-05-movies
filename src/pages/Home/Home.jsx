import { useState, useEffect } from 'react';

import { getTrending } from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrending();
        setMovies(response);
      } catch (error) {
        console.log(error.message);
        const controller = new AbortController();
        controller.abort();
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div>
        <h2>Trending today</h2>
        <MoviesList movies={movies}></MoviesList>
      </div>
    </main>
  );
};

export default Home;
