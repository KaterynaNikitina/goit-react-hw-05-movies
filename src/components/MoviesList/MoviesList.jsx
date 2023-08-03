import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, List, Item, Image } from '../MoviesList/MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Image 
                src={
                  poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image'
                }
                alt={title}
                 />
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MoviesList;
