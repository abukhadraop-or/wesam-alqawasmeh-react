import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #032541;
  color: #ffff;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: fixed;
  top: ${(props) => (props.showHeader ? '0' : '-64px')};
  transition: ease 0.3s;
  width: 100vw;
  z-index: 300;

  @media only screen and (min-width: 768px) {
    padding: 0 2.5rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 0 calc(2.5rem + (100vw - 87.5rem) / 2);
  }
`;

export const HeaderSection = styled.div`
  align-items: center;
  display: flex;
  max-height: 4rem;
  width: 33%;

  @media only screen and (min-width: 768px) {
    width: fit-content;
    gap: 0.94rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;

  @media only screen and (min-width: 768px) {
    gap: 0.94rem;
    width: fit-content;
  }
`;

export const DesktopLogo = styled.img`
  display: none;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 8.75rem;
  }
`;

export const PhoneLogoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  display: ${(props) => (props.desktopIcon ? 'none' : 'inline-block')};
  filter: invert(1);
  width: 1.57rem;

  @media only screen and (min-width: 768px) {
    display: ${(props) => (props.mobileIcon ? 'none' : 'inline-block')};
    filter: invert(0);
  }
`;

export const SearchIcon = styled.img`
  cursor: pointer;
  margin-left: 0.625rem;
  width: 1.57rem;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const HeaderLink = styled.span`
  display: none;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: fit-content;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Language = styled(HeaderLink)`
  border-radius: 0.125rem;
  border: 0.125rem solid #ffff;
  font-size: 0.75rem;
  height: 1.57rem;
  width: 1.57rem;

  &:hover {
    background-color: #ffffff;
    color: #032541;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 2.5rem;
  width: 3.44rem;
`;
