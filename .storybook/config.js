import { addDecorator, addParameters, configure } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import theme from './theme';
import './styles.scss';

addDecorator(addReadme);

addParameters({
  options: {
    name: 'Styleguide',
    theme,
  },
});

configureReadme({
  StoryPreview: ({ children }) => children
});

configure(() => require('../stories'), module);
