import styled from "styled-components";
import CardContainer from "../../Layout/CardContainer";
import styles from "../Sort/sort.styles";

const { Arrow } = styles;

const ShowMoreIcon = styled.img`
  width: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.7;
`;

const BlurEffect = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  display: ${(props) => (props.showBlur ? "block" : "none")};
  border-radius: 10px;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ShowMoreMenu = styled(CardContainer)`
  position: absolute;
  top: 40px;
  right: 15px;
  width: 280px;
  display: ${(props) => (props.showBlur ? "flex" : "none")};
  flex-direction: column;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  width: 100%;
`;

const SignupSection = styled(LoginSection)`
  border-top: 1px solid #eeeeee;
`;

const Heading = styled.h3`
  font-size: 0.9em;
`;

const SectionLink = styled.span`
  display: flex;
  gap: 15px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9em;
  align-items: center;
`;

const FakeDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 150;
  cursor: default;
  display: ${(props) => (props.showBlur ? "block" : "none")};
`;

export default {
  Arrow,
  BlurEffect,
  Container,
  Heading,
  LoginSection,
  SectionLink,
  ShowMoreIcon,
  ShowMoreMenu,
  SignupSection,
  FakeDiv,
};
