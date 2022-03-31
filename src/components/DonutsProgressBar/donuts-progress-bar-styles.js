import styled from 'styled-components';

export const CircleWrap = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: -1.25rem;
    background: #081c23;
    border-radius: 50%;
    padding: 0.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0.125rem;

  background-image: ${(props) =>
    `conic-gradient(#61d17a ${(360 / 100) * (props.rate * 10)}deg, #29383d ${
      (360 / 100) * (props.rate * 10)
    }deg)`};
`;

export const Percent = styled.p`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: #081c23;
  color: #61d17a;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
`;
