import styled from 'styled-components';
import CardContainer from 'components/Layout/card-container';

export const ShowMoreIcon = styled.img`
  width: 1.25rem;
  position: absolute;
  top: 0.94rem;
  right: 0.94rem;
  opacity: 0.7;
`;

export const BlurEffect = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1.25rem);
  display: ${(props) => (props.showBlur ? 'block' : 'none')};
  border-radius: 0.625rem;
`;

export const Container = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ShowMoreMenu = styled(CardContainer)`
  position: absolute;
  top: 2.5rem;
  right: 0.94rem;
  width: 17.5rem;
  display: ${(props) => (props.showBlur ? 'flex' : 'none')};
  flex-direction: column;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
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
  display: flex;
  gap: 0.94rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9em;
  align-items: center;
`;

export const FakeDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 150;
  cursor: default;
  display: ${(props) => (props.showBlur ? 'block' : 'none')};
`;
