import React from 'react';
import PropTypes from 'prop-types';

import {
  MovieCard,
  Image,
  SubTitle,
  Text,
} from 'components/MovieInfo/MovieInfo.styled';

const defaultImg = 'https://www.reelviews.net/resources/img/default_poster.jpg';

const MovieInfo = ({ movie }) => {
  return (
    <>
      {movie !== null && (
        <MovieCard>
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={400}
            alt="poster"
          />
          <div>
            <h2>{movie.title}</h2>
            <Text>User Score: {Math.round(movie.vote_average * 10)}&#37;</Text>
            <SubTitle>Overview</SubTitle>
            <Text>{movie.overview}</Text>
            <SubTitle>Genres</SubTitle>
            <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
          </div>
        </MovieCard>
      )}
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape ({
      name: PropTypes.string
    })),
  }),
};

export default MovieInfo;
