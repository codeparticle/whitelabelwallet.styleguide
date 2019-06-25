import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Case from 'case';
import marked from 'marked';
import * as icons from '../../src/images/icons';
import style from './icons.scss';

const darkBackground = { name: 'dark', value: '#686C71' };

const renderImages = (images, containerSize, lightBg = false) => (
  <div className={style['images-container']}>
    {
      Object.keys(images).map((key, index) => (
        <div className={style['images-inner-container']}>
          <div
            className={`${style.image} ${lightBg ? style.light : ''}`}
            key={index}
            style={containerSize}
          >
            <img
              alt={key}
              src={images[key]}
            />
          </div>
          <h4>
            {Case.capital(key)}
          </h4>
        </div>
      ))
    }
  </div>
);

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Icons (Images)

You may use these icons like so:

\`\`\`javascript
import { images } from '@codeparticle/react-style-guide';

const Component2 = () => {
  return <img src={images.icons.close} />;
};
\`\`\`
`)))
  .add('Icons', () => (
    <div className={style.container}>
      <h3>UI Icons</h3>
      {renderImages(icons, { height: '200px', width: '200px' }, true)}
    </div>
  ), {
    backgrounds: [{ ...darkBackground, default: false }],
  });
