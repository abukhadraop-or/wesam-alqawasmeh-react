import React, { useState } from 'react';
import styled from 'styled-components';
import MoviesList from 'components/MoviesList/MoviesList';
import Sort from 'components/Sort/Sort';
import { Tab, XLDesk } from 'services/breakpoints';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 4rem;
  overflow-x: hidden;
  padding: 1.25rem;
  width: 100%;

  @media (min-width: ${Tab}) {
    flex-direction: row;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3.125rem 2.5rem;
  }

  @media (min-width: ${XLDesk}) {
    max-width: 87.5rem;
  }
`;

/**
 * Create Main component.
 *
 * @returns {JSX.Element}
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
