import styled from 'styled-components';
import { Tab } from 'styles/breakpoints';

export const CircleWrap = styled.div`
  display: none;

  @media screen and (min-width: ${Tab}) {
    align-items: center;
    background: #081c23;
    border-radius: 50%;
    display: flex;
    height: 2.4rem;
    justify-content: center;
    padding: 0.125rem;
    position: absolute;
    top: -1.25rem;
    width: 2.4rem;
  }
`;

export const Circle = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.125rem;
  position: relative;
  width: 100%;

  background-image: ${(props) =>
    `conic-gradient(#61d17a ${(360 / 100) * (props.rate * 10)}deg, #29383d ${
      (360 / 100) * (props.rate * 10)
    }deg)`};
`;

export const Percent = styled.p`
  align-items: center;
  background: #081c23;
  border-radius: 50%;
  color: #61d17a;
  display: flex;
  font-size: 0.7em;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
