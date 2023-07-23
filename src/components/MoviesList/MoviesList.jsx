import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '../MoviesList/MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
