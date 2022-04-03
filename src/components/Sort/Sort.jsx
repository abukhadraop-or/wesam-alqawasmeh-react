import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardContainer from 'components/Layout/card-container';
import {
  Arrow,
  CardHeader,
  Container,
  DisabledSearchButton,
  Option,
  SearchButton,
  SectionHeader,
  Select,
  SelectionContainer,
  SubMenu,
  SubMenuTitle,
  DownArrow,
} from 'components/Sort/sort-styles';

/**
 * Create Sort component.
 *
 * @param {Object} props Props.
 * @param {Function} props.sortChangeHandler Function to handle sortBy state in Main component.
 *
 * @returns {JSX.Element}
 */
function Sort({ sortChangeHandler }) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [sortMovies, setSortMovies] = useState('');

  /**
   * Handle sortMovies state.
   *
   * @param {Object} e  Event Object for Select element.
   */
  const changeSelectionHandler = (e) => setSortMovies(e.target.value);

  /**
   * Handle sortBy state in Main component and sortMovies state.
   */
  const searchHandler = () => {
    sortChangeHandler(sortMovies);
    setSortMovies('');
  };

  /**
   * Handle showSubMenu state.
   */
  const subMenuHandler = () => setShowSubMenu((prevState) => !prevState);

  return (
    <Container>
      <h2>Popular Movies</h2>
      <CardContainer>
        <CardHeader onClick={subMenuHandler}>
          <SectionHeader>Sort</SectionHeader>
          <Arrow
            showSubMenu={showSubMenu}
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
          />
        </CardHeader>
        {showSubMenu && (
          <SubMenu>
            <SubMenuTitle>Sort Results By</SubMenuTitle>
            <SelectionContainer>
              <Select onChange={changeSelectionHandler}>
                <Option value="popularity.desc">Popularity Descending</Option>
                <Option value="popularity.asc">Popularity Ascending</Option>
                <Option value="vote_average.desc">Rating Descending</Option>
                <Option value="vote_average.asc">Rating Ascending</Option>
                <Option value="release_date.desc">
                  Release Date Descending
                </Option>
                <Option value="release_date.asc">Release Date Ascending</Option>
                <Option value="original_title.desc">Title (A-Z)</Option>
                <Option value="original_title.asc">TItle (Z-A)</Option>
              </Select>
              <DownArrow>◀</DownArrow>
            </SelectionContainer>
          </SubMenu>
        )}
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <SectionHeader>Filters</SectionHeader>
          <Arrow src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg" />
        </CardHeader>
      </CardContainer>

      <CardContainer>
        <CardHeader>
          <SectionHeader>Where To Watch</SectionHeader>
          <Arrow src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg" />
        </CardHeader>
      </CardContainer>

      {sortMovies === '' ? (
        <DisabledSearchButton disabled>Search</DisabledSearchButton>
      ) : (
        <SearchButton onClick={searchHandler}>Search</SearchButton>
      )}
    </Container>
  );
}

Sort.propTypes = {
  sortChangeHandler: PropTypes.func.isRequired,
};

export default Sort;
