/* 
 *  This is the default license template.
 *  
 *  File: overflow-container.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { OverflowContainer } from 'components/overflow-container';
import readme from 'components/overflow-container/README.md';
import { ThemeWrapper } from './utils';
import {
  lightBackground,
  darkBackground,
} from './constants';

const OverflowDemo = () => {
  const height = text('height', '600px');
  const width = text('width', '300px');

  return (
    <ThemeWrapper
      content={
        <OverflowContainer
          height={height}
          width={width}
        >
          <div className="content-container">
            <h2>Overflow Container</h2>
            <hr />
            <p>
              { /* eslint-disable-next-line max-len */ }
              {'Lorem ipsum dolor amet subway tile everyday carry chambray freegan put a bird on it man braid edison bulb vegan sriracha bicycle rights affogato vape. Tote bag palo santo echo park fixie kale chips, offal DIY ugh. Yr gentrify thundercats ugh migas edison bulb seitan vape food truck XOXO. Prism before they sold out pitchfork, squid forage XOXO kitsch irony 90\'s. Tacos deep v humblebrag hexagon adaptogen intelligentsia, venmo PBR&B locavore knausgaard craft beer occupy sriracha microdosing prism. Readymade brooklyn godard vexillologist austin raclette polaroid narwhal retro selvage gochujang VHS cloud bread tumeric. Tote bag cred tacos meh.'}
            </p>
            <hr />
            <p>
              { /* eslint-disable-next-line max-len */ }
              {'IPhone waistcoat poke kale chips fam, single-origin coffee la croix. Semiotics schlitz man braid keffiyeh taxidermy franzen. Normcore migas bespoke waistcoat kinfolk +1 heirloom distillery chambray blue bottle umami. Pop-up vape ramps PBR&B prism brunch mumblecore mlkshk meh hella pabst locavore actually. Poke man braid semiotics, edison bulb brooklyn narwhal cred flexitarian hexagon kombucha tote bag everyday carry post-ironic gluten-free vegan. Sriracha hashtag 90\'s, jianbing selfies hexagon occupy gastropub la croix hoodie humblebrag forage tattooed mixtape adaptogen.'}
            </p>
          </div>
        </OverflowContainer>
      }
    />
  );
};

storiesOf('OverflowContainer', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('OverflowContainer', () => (
    <OverflowDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  });
