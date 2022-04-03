import styled from 'styled-components';
import { Tab } from 'services/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media only screen and (min-width: ${Tab}) {
    width: 16.25rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 1em;
`;

export const CardHeader = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.94rem;
`;

export const SubMenu = styled(CardHeader)`
  border-top: 0.063rem solid #eeeeee;
  flex-direction: column;
`;

export const SubMenuTitle = styled.h3`
  align-self: flex-start;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
`;

export const Arrow = styled.img`
  transform: ${(props) =>
    props.showSubMenu ? 'rotate(90deg)' : 'rotate(0deg)'};
  width: 1.25rem;
`;

export const SelectionContainer = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  appearance: none;
  background-color: #e4e7eb;
  border-radius: 0.625rem;
  border: none;
  color: #212529;
  outline: 0;
  padding: 0.94rem;
  width: 100%;
`;

export const DownArrow = styled.p`
  font-size: 0.625rem;
  position: absolute;
  right: 0.94rem;
  transform: rotate(270deg);
`;

export const SearchButton = styled.button`
  background-color: #01b4e4;
  border-radius: 1.25rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  height: 2.75rem;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #000;
  }
`;

export const DisabledSearchButton = styled(SearchButton)`
  background-color: #ececec;
  color: #0000007f;

  &:hover {
    background-color: #ececec;
  }
`;

export const Option = styled.option``;
