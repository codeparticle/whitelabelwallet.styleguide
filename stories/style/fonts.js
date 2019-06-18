import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import styles from './fonts.scss';

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Typography
React-style-guide's Typography.

SCSS variables that are available to be used for font purposes.
\`\`\`scss
@import '@codeparticle/react-style-guide/fonts';

.my-heading {\n
  $font-size: $$font-size-md-3;\n
}
\`\`\`
`)))
  .add('Typography', () => (
    <div className={styles.fonts}>
      <div className={styles.container}>
        <div className={styles.fontXS1}>(8px-10px) XS 1</div>
        <div className={styles.fontXS2}>(10px-12px) XS 2</div>
        <div className={styles.fontXS3}>(12px-14px) XS 3</div>
      </div>
      <div className={styles.container}>
        <div className={styles.fontSM1}>(14px-18px) SM 1</div>
        <div className={styles.fontSM2}>(16px-18px) SM 2</div>
        <div className={styles.fontSM3}>(18px-22px) SM 3</div>
      </div>
      <div className={styles.container}>
        <div className={styles.fontMD1}>(18px-24px) MD 1</div>
        <div className={styles.fontMD2}>(22px-30px) MD 2</div>
        <div className={styles.fontMD3}>(22px-36px) MD 3</div>
        <div className={styles.fontMD4}>(18px-36px) MD 4</div>
      </div>
      <div className={styles.container}>
        <div className={styles.fontLG1}>(30px-36px) LG 1</div>
        <div className={styles.fontLG2}>(16px-42px) LG 2</div>
        <div className={styles.fontLG3}>(32px-48px) LG 3</div>
        <div className={styles.fontLG4}>(28px-64px) LG 4</div>
      </div>
      <div className={styles.container}>
        <div className={styles.fontXL1}>(46px-56px) XL 1</div>
        <div className={styles.fontXL2}>(24px-64px) XL 2</div>
        <div className={styles.fontXL3}>(72px-96px) XL 3</div>
        <div className={styles.fontXL4}>(120px-300px) XL 4</div>
      </div>
    </div>
  ));
