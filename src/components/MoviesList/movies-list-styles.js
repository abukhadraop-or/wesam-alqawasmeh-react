import styled from 'styled-components';
import CardContainer from 'components/Layout/card-container';
import { Tab, Desk, LDesk, XLDesk } from 'services/breakpoints';

export const MovieCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: ${Tab}) {
    justify-content: flex-start;
    width: calc(100% - 16.25rem);
  }
`;

export const MovieCard = styled(CardContainer)`
  display: flex;
  flex-direction: row;
  height: 8.8rem;
  position: relative;
  width: 100%;

  @media (min-width: ${Tab}) {
    flex-direction: column;
    height: auto;
    width: calc((100% - 1.25rem) / 2);
  }

  @media (min-width: ${Desk}) {
    width: calc((100% - 2.5rem) / 3);
  }

  @media (min-width: ${LDesk}) {
    width: calc((100% - 3.75rem) / 4);
  }

  @media (min-width: ${XLDesk}) {
    width: calc((100% - 5rem) / 5);
  }
`;

export const MovieCardImg = styled.img`
  border-bottom-left-radius: 0.65rem;
  border-top-left-radius: 0.65rem;

  @media only screen and (min-width: ${Tab}) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.65rem;
    height: calc(((100vw - 16.25rem) / 2 - 1.25rem) * 1.25);
    width: 100%;
  }

  @media (min-width: ${Desk}) {
    height: calc(((100vw - 16.25rem) / 3 - 1.25rem) * 1.33);
  }

  @media (min-width: ${LDesk}) {
    height: calc(((100vw - 16.25rem) / 4 - 1.25rem) * 1.33);
  }

  @media (min-width: ${XLDesk}) {
    height: calc(((100vw - 16.25rem) / 5 - 1.25rem) * 1.33);
    max-height: 17.5rem;
  }
`;

export const MovieCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.875rem;
  position: relative;

  @media only screen and (min-width: ${Tab}) {
    justify-content: end;
  }
`;

export const MovieTitle = styled.h2`
  display: block;
  font-size: 1em;
  margin: 0;
  overflow: hidden;

  @media screen and (min-width: ${Tab}) {
    margin-top: 1.875rem;
  }
`;

export const ReleaseDate = styled.p`
  color: gray;
  font-size: 0.9em;
  margin-top: 0.45rem;
`;

export const MovieDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  margin-top: 1.45rem;
  overflow: hidden;

  @media only screen and (min-width: ${Tab}) {
    display: none;
  }
`;

export const BrokenImgContainer = styled.div`
  align-items: center;
  background-color: #a1a1a1;
  border-bottom-left-radius: 0.65rem;
  border-top-left-radius: 0.65rem;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: ${Tab}) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.65rem;
    height: calc(((100vw - 16.25rem) / 2 - 1.25rem) * 1.27);
    width: 100%;
  }

  @media (min-width: ${Desk}) {
    height: calc(((100vw - 16.25rem) / 3 - 1.25rem) * 1.33);
  }

  @media (min-width: ${LDesk}) {
    height: calc(((100vw - 16.25rem) / 4 - 1.25rem) * 1.33);
  }

  @media (min-width: ${XLDesk}) {
    height: calc(((100vw - 16.25rem) / 5 - 1.25rem) * 1.33);
    max-height: 17.5rem;
  }
`;

export const BrokenImg = styled.img`
  height: 6.25rem;
  width: 6.25rem;
`;
