import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import Case from 'case';
import marked from 'marked';
import { icons } from '../../src/images';
import style from './icons.scss';

const darkBackground = { name: 'dark', value: '#686C71' };

const renderImages = (images, imageProps, containerSize, lightBg = false) => (
  <div className={style['images-container']}>
    {
      Object.keys(images).map((key, index) => {
        const Image = images[key];

        return (
          <div
            className={style['images-inner-container']}
            key={index}
          >
            <div
              className={`${style.image} ${lightBg ? style.light : ''}`}
              key={index}
              style={containerSize}
            >
              <Image {...imageProps} />
            </div>
            <h4>
              {Case.capital(key.replace(/svg/i, ''))}
            </h4>
          </div>
        );
      })
    }
  </div>
);

storiesOf('Style', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(marked(`
# Icons (Images)

You may use these icons like so:

\`\`\`javascript
import { images } from '@codeparticle/react-style-guide';

const { SvgClose } = images.icons;

const Component2 = () => {
  return <SvgClose fill='red' />;
};
\`\`\`
`)))
  .add('Icons', () => {
    const fill = text('fill', '#607998');
    const height = text('height', '24');
    const width = text('width', '24');

    return (
      <div className={style.container}>
        <h3>UI Icons</h3>
        {renderImages(icons, { fill, height, width }, { height: '200px', width: '200px' }, true)}
      </div>
    );
  }, {
    backgrounds: [{ ...darkBackground, default: false }],
  });
