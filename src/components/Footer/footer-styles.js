import styled from 'styled-components';
import { Tab } from 'services/breakpoints';

export const FooterContainer = styled.div`
  background-color: #032541;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: flex-start;
  padding: 2.5rem 1.25rem;
  width: 100vw;

  @media screen and (min-width: ${Tab}) {
    flex-direction: row;
    justify-content: center;
    padding: 5rem 0.063rem;
  }
`;

export const FooterItemList = styled.ul`
  width: fit-content;
`;

export const ListItem = styled.li`
  color: #ffffffdd;
  cursor: pointer;
  padding-bottom: 0.438rem;
`;

export const ListTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0.625rem;
`;

export const FooterButton = styled.button`
  background-color: #ffffff;
  border-radius: 0.313rem;
  border: none;
  color: #235ea7;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

export const FooterLogo = styled.img`
  align-self: flex-end;
  cursor: pointer;
  display: none;
  height: 9.375rem;
  position: relative;
  top: -2.25rem;
  width: 9.375rem;

  @media screen and (min-width: ${Tab}) {
    display: inline-block;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
