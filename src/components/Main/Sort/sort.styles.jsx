import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    width: 260px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 1em;
`;

const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
`;

const SubMenu = styled(CardHeader)`
  border-top: 1px solid #eeeeee;
  flex-direction: column;
`;

const SubMenuTitle = styled.h3`
  align-self: flex-start;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Arrow = styled.img`
  transform: ${(props) =>
    props.showSubMenu ? "rotate(90deg)" : "rotate(0deg)"};
  width: 20px;
`;

const SelectionContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const Select = styled.select`
  background-color: #e4e7eb;
  border-radius: 10px;
  color: #212529;
  padding: 15px;
  width: 100%;
  outline: 0;
  border: none;
  appearance: none;
`;

const DownArrow = styled.p`
  transform: rotate(270deg);
  font-size: 10px;
  position: absolute;
  right: 15px;
`;

const SearchButton = styled.button`
  background-color: #01b4e4;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  height: 44px;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #000;
  }
`;

const DisabledSearchButton = styled(SearchButton)`
  background-color: #ececec;
  color: #0000007f;

  &:hover {
    background-color: #ececec;
  }
`;

const Option = styled.option``;

export default {
  Arrow,
  CardHeader,
  Container,
  DisabledSearchButton,
  DownArrow,
  Option,
  SearchButton,
  SectionHeader,
  Select,
  SelectionContainer,
  SubMenu,
  SubMenuTitle,
};
