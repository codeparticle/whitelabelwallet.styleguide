/* 
 *  This is the default license template.
 *  
 *  File: area-chart.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, withKnobs, object } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { AreaChart } from '../src';
import readme from '../src/components/area-chart/README.md';
import { lightBackground } from './constants';

const AreaChartDemo = () => {
  const colorOne = color('colorOne', 'red');
  const colorTwo = color('colorTwo', 'green');

  const colors = [
    colorOne,
    colorTwo,
  ];

  const defaultData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const data = object('Data', defaultData);


  return (
    <div style={{ height: 300, width: 300 }}>
      <AreaChart
        data={data}
        colors={colors}
      />
    </div>
  );
};

storiesOf('Charts', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('AreaChart', () => (
    <AreaChartDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
