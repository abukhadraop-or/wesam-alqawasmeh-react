import React, { useState } from "react";
import styled from "styled-components";
import MoviesList from "./MoviesList/MoviesList";
import Sort from "./Sort/Sort";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 64px;
  overflow-x: hidden;
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 40px;
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

/**
 * Create Main component.
 *
 * @returns {JSX.Element}
 */

function Main() {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const sortChangeHandler = (sort) => {
    setSortBy(sort);
  };

  return (
    <Container>
      <Sort sortChangeHandler={sortChangeHandler} />
      <MoviesList sortBy={sortBy} />
    </Container>
  );
}

export default Main;
