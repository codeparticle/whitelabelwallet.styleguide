import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import styles from './typography.scss';

const ListItem = ({
  children,
  isClass,
}) => {
  const [elementRef, setElementRef] = useState(null);

  // Used to just refresh the component when window is resized
  const [refreshState, setRefreshState] = useState(false);

  useEffect(() => {
    setTimeout(() => setRefreshState(true), 100);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setRefreshState(!refreshState);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [refreshState, setRefreshState]);

  const Children = React.cloneElement(children, {
    ref: (ref) => {
      if (!elementRef && ref) {
        setElementRef(ref);
      }
    },
  });
  const renderStyleColumns = () => {
    if (!elementRef) {
      return null;
    }

    const {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    } = window.getComputedStyle(elementRef);

    return [
      { label: 'Family', value: `${fontFamily.split(',')[0]} (${fontWeight})` },
      { label: 'Size', value: fontSize },
      { label: 'Line height', value: lineHeight },
    ].map(({ label, value }) => (
      <div
        className={styles.column}
        key={label}
      >
        <div className={styles.label}>
          {label}
        </div>
        <div>
          {value}
        </div>
      </div>
    ));
  };

  let title = '';

  if (elementRef) {
    title = isClass ? elementRef.className.split('__')[1].split('__')[0].replace(/-/g, ' ') : elementRef.tagName.toLowerCase();
  }

  return (
    <li>
      <h4>
        {title}
      </h4>
      <div className={styles.table}>
        {renderStyleColumns()}
        <div className={styles.column}>
          {Children}
        </div>
      </div>
    </li>
  );
};

const DUMMY_TEXT = 'The wizard quickly jinxed the gnomes before they vaporized';

/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Typography
React-style-guide's Typography.

By importing the index file in your main app.js file you have access to all these base styles.
\`\`\`css
@import '~@codeparticle/react-style-guide/styles/index';
\`\`\`

There are also SCSS font variables available.
\`\`\`scss
@import '@codeparticle/react-style-guide/fonts';

.my-heading {\n
  $font-size: $font-size-md-3;\n
}
\`\`\`
`)))
  .add('Typography', () => (
    <div className={styles.container}>
      <h3>Header</h3>
      <ul className={styles.fonts}>
        <ListItem>
          <h1>{DUMMY_TEXT}</h1>
        </ListItem>
        <ListItem>
          <h2>{DUMMY_TEXT}</h2>
        </ListItem>
        <ListItem>
          <h3>{DUMMY_TEXT}</h3>
        </ListItem>
        <ListItem>
          <h4>{DUMMY_TEXT}</h4>
        </ListItem>
        <ListItem>
          <h5>{DUMMY_TEXT}</h5>
        </ListItem>
      </ul>

      <h3>Big AF</h3>
      <ul className={styles.fonts}>
        <ListItem isClass>
          <div className={styles.gigantic}>{DUMMY_TEXT}</div>
        </ListItem>
      </ul>

      <h3>Input</h3>
      <ul className={styles.fonts}>
        <ListItem>
          <input disabled value={DUMMY_TEXT} />
        </ListItem>
        <ListItem>
          <label>{DUMMY_TEXT}</label>
        </ListItem>
        <ListItem>
          <option>{DUMMY_TEXT}</option>
        </ListItem>
      </ul>
    </div>
  ));
