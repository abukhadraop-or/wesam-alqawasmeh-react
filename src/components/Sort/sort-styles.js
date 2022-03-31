import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media only screen and (min-width: 768px) {
    width: 16.25rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 1em;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.94rem;
  cursor: pointer;
`;

export const SubMenu = styled(CardHeader)`
  border-top: 0.63rem solid #eeeeee;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const Select = styled.select`
  background-color: #e4e7eb;
  border-radius: 0.625rem;
  color: #212529;
  padding: 0.94rem;
  width: 100%;
  outline: 0;
  border: none;
  appearance: none;
`;

export const DownArrow = styled.p`
  transform: rotate(270deg);
  font-size: 0.625rem;
  position: absolute;
  right: 0.94rem;
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
