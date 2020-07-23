/* 
 *  This is the default license template.
 *  
 *  File: deterministic-pass-phrase.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeWrapper } from './utils';
import { DeterministicPassPhrase } from '../src';
import readme from '../src/components/deterministic-pass-phrase/README.md';
import {
  darkBackground,
  lightBackground,
} from './constants';

function generateArray() {
  const arr = [];

  for (let i = 0; i < 24; i += 1) {
    arr.push(`Word: ${i + 1}`);
  }

  return arr;
}

const PassPhraseDemo = ({ defaultToDark = false }) => {
  const wordArray = generateArray();
  const isShuffled = boolean('isShuffled', false);
  const isBlurred = boolean('isBlurred', true);
  const onCompletion = action('completed');

  return (
    <div style={{ padding: '25px 10%' }}>
      <ThemeWrapper
        defaultToDark={defaultToDark}
        content={
          <DeterministicPassPhrase
            isBlurred={isBlurred}
            isShuffled={isShuffled}
            onCompletion={onCompletion}
            wordArray={wordArray}
          />
        }
      />
    </div>
  );
};

storiesOf('Deterministic Pass Phrase', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <PassPhraseDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <PassPhraseDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
