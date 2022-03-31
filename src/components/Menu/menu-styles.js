import styled from 'styled-components';

export const MenuContainer = styled.div`
  backdrop-filter: blur(1.25rem);
  background-color: #032541e5;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  left: ${(props) => (props.showMenu ? '0' : '-90%')};
  min-height: calc(100vh - 4rem);
  padding: 1.25rem 1.875rem;
  position: fixed;
  top: 4rem;
  transition: ease 0.4s;
  width: 90%;

  @media only screen and (min-width: 768px) {
    align-items: center;
    backdrop-filter: unset;
    background: none;
    flex-direction: row;
    gap: 1.25rem;
    justify-content: space-between;
    left: 0;
    min-height: 4rem;
    padding: 0;
    position: relative;
    top: 0;
  }
`;

export const MenuItemsContainer = styled.div`
  flex: none;

  @media only screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    justify-content: space-between;
  }
`;

export const MenuItem = styled.h3`
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.desktop ? 'none' : 'block')};
  font-size: 1.3 em;
  margin-bottom: 0.625rem;
  max-height: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    display: block;
    font-size: 0.938rem;
    margin-bottom: 0;
  }
`;

export const SecondaryLi = styled.li`
  color: #ffffff99;
  font-size: 0.813rem;
  font-weight: bold;
  list-style: none;
  margin-bottom: 0.625rem;
`;

export const DropDown = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Login = styled(SecondaryLi)`
  margin-bottom: 0;
  margin-top: 1.25rem;
`;
