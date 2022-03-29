import styled from "styled-components";

const MenuContainer = styled.div`
  backdrop-filter: blur(20px);
  background-color: #032541e5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  left: ${(props) => (props.showMenu ? "0" : "-90%")};
  min-height: calc(100vh - 64px);
  padding: 20px 30px;
  position: fixed;
  top: 64px;
  transition: ease 0.4s;
  width: 90%;

  @media only screen and (min-width: 768px) {
    align-items: center;
    backdrop-filter: unset;
    background: none;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    left: 0;
    min-height: 64px;
    padding: 0;
    position: relative;
    top: 0;
  }
`;

const MenuItemsContainer = styled.div`
  flex: none;

  @media only screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }
`;

const MenuItem = styled.h3`
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.desktop ? "none" : "block")};
  font-size: 1.3 em;
  margin-bottom: 10px;
  max-height: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: block;
    font-size: 15px;
    margin-bottom: 0;
  }
`;

const SecondaryLi = styled.li`
  color: #ffffff99;
  font-size: 13px;
  font-weight: bold;
  list-style: none;
  margin-bottom: 10px;
`;

const DropDown = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Login = styled(SecondaryLi)`
  margin-bottom: 0;
  margin-top: 20px;
`;

export default {
  DropDown,
  Login,
  MenuContainer,
  MenuItem,
  MenuItemsContainer,
  SecondaryLi,
};
