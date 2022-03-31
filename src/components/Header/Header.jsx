import React, { useState } from 'react';
import {
  DesktopLogo,
  HeaderContainer,
  HeaderLink,
  HeaderSection,
  Icon,
  Language,
  Logo,
  PhoneLogoSection,
  SearchIcon,
  SearchSection,
} from 'components/Header/header-styles';
import Menu from 'components/Menu/Menu';

/**
 * Create Header component.
 *
 * @returns {JSX.Element}
 */
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  /**
   * Handle showMenu state.
   */
  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  // Debounce function for window scrolling.
  function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  // to show menu depending on scrolling
  let prevScroll = window.pageYOffset;
  /**
   * Handle showHeader state.
   */
  window.onscroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    console.log('scroll');
    if (currentScroll <= prevScroll) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }

    prevScroll = currentScroll;
  });

  return (
    <HeaderContainer showHeader={showHeader}>
      <HeaderSection>
        {' '}
        <Icon
          mobileIcon
          onClick={showMenuHandler}
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-600-menu-7ef6e3f4266b4b216a8ef5920da43fc8c96e1ee805a219c5628fed5bfac854d5.svg"
        />
        <DesktopLogo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        <Menu showMenu={showMenu} />
      </HeaderSection>

      <PhoneLogoSection>
        <a href="/">
          <Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        </a>
      </PhoneLogoSection>

      <SearchSection>
        <Icon
          mobileIcon
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg"
        />
        <Icon
          desktopIcon
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
        />
        <Language>EN</Language>
        <HeaderLink>Login</HeaderLink>
        <HeaderLink>Join TMDB</HeaderLink>
        <SearchIcon src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" />
      </SearchSection>
    </HeaderContainer>
  );
}

export default Header;
