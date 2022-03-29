import React from "react";
import PropTypes from "prop-types";
import styles from "./donutsProgressBar.styles";

const { Circle, CircleWrap, Fill, Inside, MaskFull, MaskHalf } = styles;

/**
 * Create ProgressBar component.
 *
 * @param {Object} props.rate Number holds movie rating.
 *
 * @returns {JSX.Element}
 */

function DonutsProgressBar({ rate }) {
  return (
    <CircleWrap>
      <Circle>
        <MaskFull rate={rate}>
          <Fill rate={rate} />
        </MaskFull>
        <MaskHalf>
          <Fill rate={rate} />
        </MaskHalf>
        <Inside rate={rate}> {rate ? `${rate * 10}%` : "NR"} </Inside>
      </Circle>
    </CircleWrap>
  );
}

DonutsProgressBar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default DonutsProgressBar;
