import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle,
  CircleWrap,
  Percent,
} from 'components/DonutsProgressBar/donuts-progress-bar-styles';

/**
 * Create ProgressBar component.
 *
 * @param {Object} props Props.
 * @param {Number} props.rate Number holds movie rating.
 *
 * @return {JSX.Element}
 */
function DonutsProgressBar({ rate }) {
  return (
    <CircleWrap>
      <Circle rate={rate}>
        <Percent>{rate ? `${rate * 10}%` : `NR`}</Percent>
      </Circle>
    </CircleWrap>
  );
}

DonutsProgressBar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default DonutsProgressBar;
