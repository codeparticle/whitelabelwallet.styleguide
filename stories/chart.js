import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { VictoryArea } from 'victory';
import { Chart } from '../src';
import readme from '../src/components/chart/README.md';
import { lightBackground } from './constants';

const ChartDemo = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const defaultStyle = {
    width: '100%',
    height: 280,
  };

  return (
    <div style={defaultStyle}>
      <Chart>
        <VictoryArea
          data={data}
        />
      </Chart>
    </div>
  );
};

storiesOf('Charts', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Chart', () => (
    <ChartDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
