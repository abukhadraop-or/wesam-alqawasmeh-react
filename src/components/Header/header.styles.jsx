import styled from "styled-components";

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #032541;
  color: #ffff;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: ${(props) => (props.showHeader ? "0" : "-64px")};
  transition: ease 0.3s;
  width: 100vw;
  z-index: 200;

  @media only screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 1400px) {
    padding: 0 calc(40px + (100vw - 1400px) / 2);
  }
`;

const HeaderSection = styled.div`
  align-items: center;
  display: flex;
  max-height: 64px;
  width: 33%;

  @media only screen and (min-width: 768px) {
    width: fit-content;
    gap: 15px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;

  @media only screen and (min-width: 768px) {
    gap: 15px;
    width: fit-content;
  }
`;

const DesktopLogo = styled.img`
  display: none;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 140px;
  }
`;

const PhoneLogoSection = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  display: ${(props) => (props.desktopIcon ? "none" : "inline-block")};
  filter: invert(1);
  width: 25px;

  @media only screen and (min-width: 768px) {
    display: ${(props) => (props.mobileIcon ? "none" : "inline-block")};
    filter: invert(0);
  }
`;

const SearchIcon = styled.img`
  cursor: pointer;
  margin-left: 10px;
  width: 25px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

const HeaderLink = styled.span`
  display: none;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: fit-content;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Language = styled(HeaderLink)`
  border-radius: 2px;
  border: 2px solid #ffff;
  font-size: 12px;
  height: 25px;
  width: 25px;

  &:hover {
    background-color: #ffffff;
    color: #032541;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  height: 40px;
  width: 55px;
`;

export default {
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
};
