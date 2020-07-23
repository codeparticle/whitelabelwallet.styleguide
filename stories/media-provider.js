/* 
 *  This is the default license template.
 *  
 *  File: media-provider.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  MediaProvider,
  useMedia,
} from 'src';
import readme from 'components/media-provider/README.md';

const DemoComponent = ({ type, media }) => {
  let mq = '';

  Object.keys(media).forEach((query) => {
    if (media[query]) {
      mq = query;
    }
  });

  return (
    <div className="demo-container">
      <h2 className="demo-container__header">{`This is a component using ${type}!`}</h2>
      <p className="demo-container__desc">{`The media query is '${mq}'`}</p>
      <style jsx>
        {`
          @import 'styles/layout.scss';
          
          .demo-container {
            border-radius: 10px;
            padding: $space-3;
          }
        `}
      </style>
    </div>
  );
};

const HookDemo = ({ type = 'useMedia(false)', withProvider = false }) => {
  const media = useMedia(withProvider);

  return <DemoComponent type={type} media={media} />;
};

const MediaContextDemo = () => {
  const type = 'MediaProvider + useMedia()';

  return (
    <MediaProvider>
      <HookDemo type={type} withProvider />
    </MediaProvider>
  );
};

storiesOf('MediaProvider', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('useMedia(false)', () => (
    <HookDemo />
  ))
  .add('MediaProvider + useMedia()', () => (
    <MediaContextDemo />
  ));
