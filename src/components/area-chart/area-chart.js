import React from 'react';
import { VictoryArea } from 'victory';
import PropTypes from 'prop-types';
import { Chart } from 'components/chart';
import styles from './area-chart.scss';

const Gradient = ({
  colors,
  gradientId,
}) => {
  if (colors) {
    const incrementPercent = 100 / (colors.length - 1);
    let offset = 0;

    const stops = colors.map((color, i) => {
      const stop = (
        <stop
          key={i}
          offset={`${offset}%`}
          stopColor={color}
        />
      );
      offset += incrementPercent;
      return stop;
    });

    return (
      <svg className={styles['area-gradient']}>
        <defs>
          <linearGradient id={gradientId}>
            {stops}
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return null;
};

const AreaChart = ({
  data,
  colors,
  children,
  ...rest
}) => {
  const gradientId = 'areaChart';

  return (
    <Chart {...rest}>
      <VictoryArea
        data={data}
        style={{ data: { fill: `url(#${gradientId})` } }}
      />
      <Gradient
        colors={colors}
        gradientId={gradientId}
      />
      {children}
    </Chart>
  );
};

AreaChart.propTypes = {
  children: PropTypes.node,
  colors: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

AreaChart.defaultProps = {
  children: null,
  colors: ['red'],
  data: [],
};

export { AreaChart };
