/**
 * @fileoverview Page footer pattern for use in WLW
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../theme-provider';

import styles from './page-footer.scss';

const THEME_KEY = 'pageFooter';

function PageFooter({
  dataSelector,
  message,
  button: Button,
}) {
  const { background, color } = useTheme(THEME_KEY);

  return (
    <>
      <div className={styles.footer} data-selector={dataSelector}>
        <h4 className={styles.footer.text} data-selector={`${dataSelector}-message`}>{message}</h4>
        <div className={styles.footer.btn} data-selector={`${dataSelector}-btn`}>
          {typeof Button === 'function' ? <Button /> : Button}
        </div>
      </div>
      <style jsx>
        {`
          .${styles.footer} {
            background: ${background};
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

PageFooter.propTypes = {
  dataSelector: PropTypes.string,
  message: PropTypes.string,
  button: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
};

PageFooter.defaultProps = {
  button: null,
  dataSelector: 'page-footer',
  message: '',
};

export { PageFooter };
