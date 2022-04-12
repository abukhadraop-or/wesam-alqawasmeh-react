import styled from 'styled-components';
import CardContainer from 'components/Layout/card-container';
import { Tab } from 'styles/breakpoints';

export const ShowMoreIcon = styled.img`
  opacity: 0.7;
  position: absolute;
  right: 0.94rem;
  top: 0.94rem;
  width: 1.25rem;
`;

export const BlurEffect = styled.div`
  backdrop-filter: blur(1.25rem);
  background-color: #0000007f;
  border-radius: 0.625rem;
  display: ${(props) => (props.showBlur ? 'block' : 'none')};
  height: 100%;
  width: 100%;
  z-index: 100;
`;

export const Container = styled.div`
  display: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 50;

  @media screen and (min-width: ${Tab}) {
    display: block;
  }
`;

export const ShowMoreMenu = styled(CardContainer)`
  display: ${(props) => (props.showBlur ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0.94rem;
  top: 2.5rem;
  width: 17.5rem;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  padding: 0.625rem;
  width: 100%;
`;

export const SignupSection = styled(LoginSection)`
  border-top: 0.063rem solid #eeeeee;
`;

export const Heading = styled.h3`
  font-size: 0.9em;
`;

export const SectionLink = styled.span`
  align-items: center;
  color: #00000099;
  display: flex;
  font-size: 0.9em;
  gap: 0.94rem;
`;

export const FakeDiv = styled.div`
  cursor: default;
  display: ${(props) => (props.showBlur ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 150;
`;
