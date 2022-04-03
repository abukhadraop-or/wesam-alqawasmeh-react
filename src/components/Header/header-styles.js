import styled from 'styled-components';
import { Tab, XLDesk } from 'services/breakpoints';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #032541;
  color: #ffff;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: fixed;
  top: ${(props) => (props.showHeader ? '0' : '-4rem')};
  transition: ease 0.3s;
  width: 100vw;
  z-index: 300;

  @media only screen and (min-width: ${Tab}) {
    padding: 0 2.5rem;
  }

  @media only screen and (min-width: ${XLDesk}) {
    padding: 0 calc(2.5rem + (100vw - 87.5rem) / 2);
  }
`;

export const HeaderSection = styled.div`
  align-items: center;
  display: flex;
  max-height: 4rem;
  width: 33%;

  @media only screen and (min-width: ${Tab}) {
    width: fit-content;
    gap: 0.94rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;

  @media only screen and (min-width: ${Tab}) {
    gap: 0.94rem;
    width: fit-content;
  }
`;

export const DesktopLogo = styled.img`
  cursor: pointer;
  display: none;

  @media only screen and (min-width: ${Tab}) {
    display: inline-block;
    width: 8.75rem;
  }
`;

export const PhoneLogoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;

  @media only screen and (min-width: ${Tab}) {
    display: none;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  display: ${(props) => (props.desktopIcon ? 'none' : 'inline-block')};
  filter: invert(1);
  width: 1.57rem;

  @media only screen and (min-width: ${Tab}) {
    display: ${(props) => (props.mobileIcon ? 'none' : 'inline-block')};
    filter: invert(0);
  }
`;

export const SearchIcon = styled.img`
  cursor: pointer;
  margin-left: 0.625rem;
  width: 1.57rem;

  @media screen and (min-width: ${Tab}) {
    margin-left: 0;
  }
`;

export const HeaderLink = styled.span`
  align-items: center;
  cursor: pointer;
  display: none;
  justify-content: center;
  width: fit-content;

  @media screen and (min-width: ${Tab}) {
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
