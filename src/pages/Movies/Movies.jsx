import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieBySearch } from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchMovie = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    const searchNewMovies = async () => {
      try {
        const foundMovies = await getMovieBySearch(searchMovie);
        setMovies(foundMovies);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchNewMovies();
  }, [searchMovie]);

  return (
    <div>
      <SearchBar onUpdateQuery={updateQueryString} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {searchMovie && movies.length === 0 && <p>There is no such a movie.</p>}
      {!searchMovie && movies.length === 0 && (
        <div style={{ height: '100hv' }}></div>
      )}
    </div>
  );
};

export default Movies;
