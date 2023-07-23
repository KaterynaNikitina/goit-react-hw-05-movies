import { Form, Input, Button } from 'components/SearchBar/SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ onUpdateQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;

    onUpdateQuery(searchQuery);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          required
          placeholder="Search movie"
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

SearchBar.propTypes = {
  onUpdateQuery: PropTypes.func.isRequired,
};

export default SearchBar;
