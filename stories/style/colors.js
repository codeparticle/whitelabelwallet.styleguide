import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import Case from 'case';
import colorcolor from 'colorcolor';
import colors from '../../src/styles/colors.scss';
import style from './colors.scss';

const darkBackground = { name: 'dark', value: '#686C71' };

const parsedColors = Object.entries(colors).reduce((acc, [key, value]) => {
  if (key[0] === '_') {
    acc.push({
      title: Case.capital(key.substr(1)),
      values: [],
    });
  } else {
    let hex = colorcolor(value, 'hex').toUpperCase();
    let rgb = colorcolor(value, 'rgb');

    if (value.indexOf('gradient') !== -1) {
      hex = value.split('(')[1];
      hex = hex.substr(0, hex.length - 1).toUpperCase();

      rgb = '';
      hex.split(',').forEach((segment, index) => {
        if (index) {
          rgb += ', ';
        }

        if (segment.includes('#')) {
          rgb += colorcolor(segment.trim(), 'rgb');
        } else {
          rgb += segment;
        }
      });
    }

    acc[acc.length - 1].values.push({
      name: Case.capital(key),
      key,
      hex,
      rgb,
      value,
    });
  }

  return acc;
}, []);
console.log(parsedColors);

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Colors

Color pallete.

You may use these colors in SCSS files like so:

\`\`\`css
@import '@codeparticle/react-style-guide/styles/colors';

.my-div {
  color: $east-bay;
}
\`\`\`
`)))
  .add('Colors', () => (
    <div>
      {parsedColors.map(({ title, values }) => (
        <div
          className={style.container}
          key={title}
        >
          <h2>
            {title}
          </h2>
          <ul>
            {values.map(({
              hex,
              key,
              name,
              rgb,
              value,
            }) => (
              <li
                className={style['list-item']}
                key={name}
              >
                <div
                  className={style.color}
                  style={{ background: value }}
                />
                <h3>{name}</h3>
                <div>Key: {key}</div>
                <div>HEX: {hex}</div>
                <div>RGB: {rgb}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ), {
    backgrounds: [{ ...darkBackground, default: false }],
  });
