import React from 'react';
import PropTypes from 'prop-types';
import { ORIENTATION_X, ORIENTATION_Y } from './orientation';
import { identity, center } from './utils';
import './bpk-chart.scss';

const BpkChartGridLines = (props) => {
  const { orientation, scale, numTicks, width, height, margin, tickOffset, tickEvery, ...rest } = props;

  const ticks = scale.ticks ?
    scale.ticks(numTicks) :
    scale.domain().filter((tick, i) => ((i - tickOffset) % tickEvery) === 0);
  const position = (scale.bandwidth ? center : identity)(scale.copy());

  const lineProps = (tick) => {
    const value = position(tick);
    return (orientation === ORIENTATION_X) ? {
      x1: value,
      x2: value,
      y2: height - margin.top - margin.bottom,
    } : {
      x2: width - margin.left - margin.right,
      y1: value,
      y2: value,
    };
  };

  const toLine = (tick, i) => (
    <line
      className={`bpk-chart__grid-line bpk-chart__grid-line--${orientation}`}
      key={`${orientation}gridline${i.toString()}`}
      {...lineProps(tick)}
      {...rest}
    />
  );

  return (
    <g className={`bpk-chart__grid-lines bpk-chart__grid-lines--${orientation}`}>
      {ticks.map(toLine)}
    </g>
  );
};

BpkChartGridLines.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,

  scale: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf([ORIENTATION_X, ORIENTATION_Y]).isRequired,
  numTicks: PropTypes.number,
  tickOffset: PropTypes.number,
  tickEvery: PropTypes.number,
};

BpkChartGridLines.defaultProps = {
  numTicks: null,
  tickOffset: 0,
  tickEvery: 1,
};

export default BpkChartGridLines;