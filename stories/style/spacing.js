import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import marked from 'marked';
import styles from './spacing.scss';

storiesOf('Style', module)
  .addDecorator(withReadme(marked(`
# Spacing
React-style-guide's spacing.

SCSS variables that are available to be used for spacing purposes.
\`\`\`scss
@import '@codeparticle/react-style-guide/constants';

.my-heading {\n
  padding: $space-1 $space-2;\n
  margin: $spacing-xl;\n
}
\`\`\`
`)))
  .add('Layout', () => (
    <div className={styles.container}>
      <div className={styles.spacing}>
        <div className={styles.space7}>28px</div>
        <div className={styles.space6}>24px</div>
        <div className={styles.space5}>20px</div>
        <div className={styles.space4}>16px</div>
        <div className={styles.space3}>12px</div>
        <div className={styles.space2}>8px</div>
        <div className={styles.space1}>4px</div>
      </div>
      <div className={styles.spacing}>
        <div className={styles.spacingXXL}>32px-60px</div>
        <div className={styles.spacingXL}>20px-40px</div>
        <div className={styles.spacingLG}>16px-32px</div>
        <div className={styles.spacingM}>12px-20px</div>
        <div className={styles.spacingSM}>8px-16px</div>
        <div className={styles.spacingXS}>4px-8px</div>
        <div className={styles.spacingXXS}>0px-4px</div>
      </div>
    </div>
  ));
