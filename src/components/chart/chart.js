import React, { useRef } from 'react';
import { VictoryChart } from 'victory';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './chart.scss';
import { useComponentSize } from './use-component-size';

const Chart = ({
  className,
  children,
  ...rest
}) => {
  const containerRef = useRef(null);
  const { width, height } = useComponentSize(containerRef);

  return (
    <div
      ref={containerRef}
      className={classNames(
        styles['chart-container'],
        className
      )}
    >
      <VictoryChart
        {...rest}
        width={width}
        height={height}
      >
        {children}
      </VictoryChart>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Chart.defaultProps = {
  className: '',
  children: null,
};

export { Chart };
