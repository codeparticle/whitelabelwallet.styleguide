/* 
 *  This is the default license template.
 *  
 *  File: config.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import { addDecorator, addParameters, configure } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import theme from './theme';
import './styles.scss';

addDecorator(addReadme);

addParameters({
  options: {
    name: 'White Label Wallet Styleguide',
    theme,
  },
});

configureReadme({
  StoryPreview: ({ children }) => children
});

configure(() => require('../stories'), module);
