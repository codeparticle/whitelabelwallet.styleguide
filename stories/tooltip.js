/* 
 *  This is the default license template.
 *  
 *  File: tooltip.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { ThemeWrapper } from './utils';
import { Tooltip, useTheme } from '../src';
import readme from '../src/components/tooltip/README.md';
import {
  darkBackground,
  offWhiteBackground,
} from './constants';

const TooltipDemo = () => {
  const theme = useTheme('demo');
  const options = {
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right',
  };
  const content = text('Content', 'Tooltip');
  const place = select('Place', options);

  return (
    <>
      <div
        className="demo-container"
        data-for="demo-tooltip"
        data-tip
      >
        Hover to trigger tooltip
      </div>
      <Tooltip
        content={content}
        Id="demo-tooltip"
        place={place}
      />
      <style jsx>
        {`
          @import 'styles/layout.scss';

          .demo-container {
            background: ${theme.background};
            border: 1px solid ${theme.border};
            color: ${theme.color};
            margin: 100px 20%;
            padding: $space-3;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

const ThemedTooltip = props => (
  <ThemeWrapper
    defaultToDark={props.defaultToDark}
    content={
      <TooltipDemo />
    }
  />
);

storiesOf('Tooltip', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <ThemedTooltip />
  ), {
    backgrounds: [{ ...offWhiteBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <ThemedTooltip defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
