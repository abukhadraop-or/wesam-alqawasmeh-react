import styled from "styled-components";
import CardContainer from "../../Layout/CardContainer";

const MovieCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    width: calc(100% - 260px);
  }
`;

const MovieCard = styled(CardContainer)`
  display: flex;
  flex-direction: row;
  height: 141px;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    height: auto;
    width: calc((100% - 20px) / 2);
  }

  @media (min-width: 992px) {
    width: calc((100% - 40px) / 3);
  }

  @media (min-width: 1200px) {
    width: calc((100% - 60px) / 4);
  }

  @media (min-width: 1400px) {
    width: calc((100% - 80px) / 5);
  }
`;

const MovieCardImg = styled.img`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (min-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
    width: 100%;
  }
`;

const MovieCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  position: relative;

  @media only screen and (min-width: 768px) {
    justify-content: end;
  }
`;

const MovieTitle = styled.h2`
  display: block;
  font-size: 1em;
  margin: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

const ReleaseDate = styled.p`
  color: gray;
  font-size: 0.9em;
  margin-top: 7px;
`;

const MovieDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  margin-top: 23px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const BrokenImgContainer = styled.div`
  align-items: center;
  background-color: #a1a1a1;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: calc(((100vw - 260px) / 2 - 20px) * 1.27);
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
  }

  @media (min-width: 992px) {
    height: calc(((100vw - 260px) / 3 - 20px) * 1.33);
  }

  @media (min-width: 1200px) {
    height: calc(((100vw - 260px) / 4 - 20px) * 1.33);
  }

  @media (min-width: 1400px) {
    height: calc(((100vw - 260px) / 5 - 20px) * 1.33);
    max-height: 281px;
  }
`;

const BrokenImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default {
  BrokenImg,
  BrokenImgContainer,
  MovieCard,
  MovieCardContentContainer,
  MovieCardImg,
  MovieCardsContainer,
  MovieDescription,
  MovieTitle,
  ReleaseDate,
};
