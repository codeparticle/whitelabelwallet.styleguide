/* 
 *  This is the default license template.
 *  
 *  File: logo.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Logo Component
 * @author Kevin Van Beek, Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'svgs';
import styles from './logo.scss';

const { SvgLogoMark, SvgLogoType } = icons;
const Logo = ({ hideText }) => (
  <div className={styles.logo}>
    <div className={styles['logo__mark-container']}>
      <SvgLogoMark className={styles['logo__mark']} />
    </div>
    {!hideText && (
      <div className={styles['logo__type-container']}>
        <SvgLogoType className={styles['logo__type']} />
      </div>
    )}
  </div>
);

export { Logo };

Logo.propTypes = {
  hideText: PropTypes.bool,
};

Logo.defaultProps = {
  hideText: false,
};
