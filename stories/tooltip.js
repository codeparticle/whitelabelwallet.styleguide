import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Tooltip, useTheme } from '../src';
import readme from '../src/components/tooltip/README.md';
import { offWhiteBackground } from './constants';

const TooltipDemo = ({ content = 'Tooltip' }) => {
  const theme = useTheme('demo');
  const options = {
    Top: 'top',
    Bottom: 'bottom',
    Left: 'left',
    Right: 'right',
  };
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

storiesOf('Tooltip', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <TooltipDemo />
  ), {
    backgrounds: [{ ...offWhiteBackground, default: true }],
  });
