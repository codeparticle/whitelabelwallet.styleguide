import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import Case from 'case';
import marked from 'marked';
import { icons } from 'svgs';
import style from './svgs.scss';

const darkBackground = { name: 'dark', value: '#686C71' };

const renderSvgs = (svgs, svgProps, containerSize, lightBg = false) => (
  <div className={style['svgs-container']}>
    {
      Object.keys(svgs).map((key, index) => {
        const Image = svgs[key];

        return (
          <div
            className={style['svgs-inner-container']}
            key={index}
          >
            <div
              className={`${style.image} ${lightBg ? style.light : ''}`}
              key={index}
              style={containerSize}
            >
              <Image {...svgProps} />
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
# Svgs

You may use these svgs like so:

\`\`\`javascript
import { svgs } from '@codeparticle/react-style-guide';

const { SvgClose } = svgs.icons;

const Component2 = () => {
  return <SvgClose fill='red' />;
};
\`\`\`
`)))
  .add('Svgs', () => {
    const fill = text('fill', '#607998');
    const height = text('height', '24');
    const width = text('width', '24');

    return (
      <div className={style.container}>
        <h3>UI Icons</h3>
        {renderSvgs(icons, { fill, height, width }, { height: '200px', width: '200px' }, true)}
      </div>
    );
  }, {
    backgrounds: [{ ...darkBackground, default: false }],
  });
