/* 
 *  This is the default license template.
 *  
 *  File: carousel.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Carousel } from 'components/carousel';
import readme from 'components/carousel/README.md';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import {
  darkBackground,
  lightBackground,
} from './constants';


const CarouselDemo = ({ defaultToDark = false }) => {
  const dataSet = [{ name: 'Address 1' }, { name: 'Address 2' }, { name: 'Address 3' }, { name: 'Address 4' }];

  const onChangeHandler = (selectedItem) => {
    console.log('change fired', selectedItem);
  };

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <Carousel dataSet={dataSet} onChange={onChangeHandler} />
      }
    />
  );
};

storiesOf('Carousel', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <CarouselDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <CarouselDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
