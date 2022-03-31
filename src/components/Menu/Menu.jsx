import React from 'react';
import PropTypes from 'prop-types';
import {
  DropDown,
  Login,
  MenuContainer,
  MenuItem,
  MenuItemsContainer,
  SecondaryLi,
} from 'components/Menu/menu-styles';

/**
 * Create Menu element.
 *
 * @param {Boolean} showMenu Boolean to manage menu visibility.
 *
 * @returns {JSX.Element}
 */
function Menu({ showMenu }) {
  return (
    <MenuContainer showMenu={showMenu}>
      <MenuItemsContainer>
        <MenuItem>Movies</MenuItem>
        <MenuItem>TV Shows</MenuItem>
        <MenuItem>People</MenuItem>
        <MenuItem desktop>More</MenuItem>
      </MenuItemsContainer>

      <DropDown>
        <SecondaryLi>Contribution Bible</SecondaryLi>
        <SecondaryLi>Apps</SecondaryLi>
        <SecondaryLi>Discussions</SecondaryLi>
        <SecondaryLi>Leader board</SecondaryLi>
        <SecondaryLi>Contribute</SecondaryLi>
        <SecondaryLi>API</SecondaryLi>
        <SecondaryLi>Support</SecondaryLi>
        <SecondaryLi>About</SecondaryLi>
        <Login>Login</Login>
      </DropDown>
    </MenuContainer>
  );
}

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default Menu;
