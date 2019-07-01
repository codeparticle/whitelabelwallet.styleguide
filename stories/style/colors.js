import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import Case from 'case';
import colorcolor from 'colorcolor';
import colors from '../../src/styles/colors.scss';
import style from './colors.scss';
import { darkBackground } from '../constants';

const parsedColors = Object.entries(colors).reduce((acc, [key, value]) => {
  if (key[0] === '_') {
    acc.push({
      title: Case.capital(key.substr(1)),
      values: [],
    });
  } else {
    const hasTransparency = (value.includes('#') && value.length > 7) || value.includes('rgba');
    const hex = colorcolor(value, hasTransparency ? 'hexa' : 'hex').toUpperCase();
    const rgb = colorcolor(value, hasTransparency ? 'rgba' : 'rgb').replace(/,/g, ', ');
    let gradient = null;

    if (value.indexOf('gradient') !== -1) {
      gradient = value.replace(/#.*,/g, (test) => {
        const split = test.split(' ');

        split[0] = colorcolor(split[0], 'rgba').replace(/,/g, ', ');

        return split.join(' ');
      });
    }

    acc[acc.length - 1].values.push({
      name: Case.capital(key),
      key,
      gradient,
      hex,
      rgb,
      value,
    });
  }

  return acc;
}, []);

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Colors

Color pallete.

You may use these colors in SCSS files like so:

\`\`\`css
@import '@codeparticle/whitelabelwallet.styleguide/styles/colors';

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
              gradient,
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
                <div>{key}</div>
                {gradient
                  ? (
                    <div>{gradient}</div>
                  ) : (
                    <Fragment>
                      <div>{hex}</div>
                      <div>{rgb}</div>
                    </Fragment>
                  )
                }
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ), {
    backgrounds: [{ ...darkBackground, default: false }],
  });
