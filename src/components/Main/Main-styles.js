import styled from 'styled-components';
import { Tab, XLDesk } from 'styles/breakpoints';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 4rem;
  overflow-x: hidden;
  padding: 1.25rem;
  width: 100%;

  @media (min-width: ${Tab}) {
    flex-direction: row;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3.125rem 2.5rem;
  }

  @media (min-width: ${XLDesk}) {
    max-width: 87.5rem;
  }
`;

export default Container;
