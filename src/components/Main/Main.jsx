import React, { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Sort from 'components/Sort/Sort';
import Container from './Main-styles';

/**
 * Create Main component.
 *
 * @return {JSX.Element}
 */
function Main() {
  const [sortBy, setSortBy] = useState('popularity.desc');

  const sortChangeHandler = (sort) => setSortBy(sort);

  return (
    <Container>
      <Sort sortChangeHandler={sortChangeHandler} />
      <MoviesList sortBy={sortBy} />
    </Container>
  );
}

export default Main;
