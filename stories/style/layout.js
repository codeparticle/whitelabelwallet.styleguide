/* 
 *  This is the default license template.
 *  
 *  File: layout.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import Highlight, { defaultProps } from 'prism-react-renderer';
import layout from 'styles/layout.scss';
import styles from './layout.scss';
import breakpointImage from './breakpoint-image.svg';
import { toKebab } from '../utils';

const parsedLayout = Object.entries(layout).map(([key, value]) => {
  if (value.includes('calc')) {
    return null;
  }

  return {
    key: key.replace(/^_/, ''),
    value: value.replace(/'/g, ''),
  };
});

const CodeHighlight = props => (
  <Highlight
    {...defaultProps}
    language="scss"
    theme={undefined}
    {...props}
  >
    {({
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps,
    }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

const BREAKPOINT_CODE = `\
@import '@codeparticle/whitelabelwallet.styleguide/layout';
 
// Mobile (portrait phones, 320px and up)
@media (min-width: 320px) { ... }
 
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }
 
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }
 
// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }
 
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
 
// Maximum supported width (extra large screens, 1690px and up)
@media (min-width: 1690px) { ... }\
`;

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Layout
whitelabelwallet.styleguide's layout.

SCSS variables that are available to be used for spacing purposes.
\`\`\`css
@import '@codeparticle/whitelabelwallet.styleguide/layout';

.my-heading {\n
  padding: $space-1 $space-2;\n
  margin: $spacing-xl;\n
}
\`\`\`
`)))
  .add('Layout', () => (
    <div className={styles.container}>
      <h3>Grid</h3>
      <h4>Columns</h4>
      <ul>
        <li>12 Column Grid</li>
        <li>25px Gutters</li>
        <li>40px Margins</li>
      </ul>

      <h3>Spacing</h3>
      <ul>
        <li>Based on the Golden Ratio for our Body type style</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Spacing</th>
            <th>Sass variable</th>
          </tr>
        </thead>
        <tbody>
          {parsedLayout.map((item) => {
            if (!item) {
              return null;
            }
            const { key, value } = item;
            return (
              <tr key={key}>
                <td>{value}</td>
                <td>
                  <CodeHighlight code={toKebab(key)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Breakpoints</h3>
      <div>Do you have well-defined breakpoints? Documenting them here can help</div>
      <div>make it clear when and how to adjust content responsively, e.g.</div>
      <img
        alt="breakpoint"
        src={breakpointImage}
      />
      <CodeHighlight code={BREAKPOINT_CODE} />
    </div>
  ));
