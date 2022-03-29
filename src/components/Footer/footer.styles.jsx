import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #032541;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  padding: 40px 20px;
  width: 100vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 80px 10px;
    justify-content: center;
  }
`;

const FooterItemList = styled.ul`
  width: fit-content;
`;

const ListItem = styled.li`
  color: #ffffffdd;
  cursor: pointer;
  padding-bottom: 7px;
`;

const ListTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const FooterButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  color: #235ea7;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  padding: 8px 16px;
  width: fit-content;
`;

const FooterLogo = styled.img`
  align-self: flex-end;
  cursor: pointer;
  display: none;
  height: 150px;
  position: relative;
  top: -36px;
  width: 150px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export default {
  FooterButton,
  FooterContainer,
  FooterItemList,
  FooterLogo,
  HeroSection,
  ListItem,
  ListTitle,
};
