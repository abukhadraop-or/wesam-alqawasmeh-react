import styled from "styled-components";

const CircleWrap = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;
    background: #081c23;
    border-radius: 50%;
    display: inline-block;
  }
`;

const Circle = styled.div``;

const MaskFull = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 50px, 50px, 25px);
  transform: rotate(${(props) => ((360 / 100) * (props.rate * 10)) / 2}deg);
`;

const MaskHalf = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 50px, 50px, 25px);
`;

const Fill = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 25px, 75px, 0px);
  background-color: #61d17a;
  transform: rotate(${(props) => ((360 / 100) * (props.rate * 10)) / 2}deg);
`;

const Inside = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  background: #081c23;
  line-height: 45px;
  text-align: center;
  margin-top: 3px;
  margin-left: 3px;
  color: #61d17a;
  position: absolute;
`;

export default {
  Circle,
  CircleWrap,
  Fill,
  Inside,
  MaskFull,
  MaskHalf,
};
