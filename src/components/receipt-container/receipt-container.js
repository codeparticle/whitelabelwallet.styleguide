/* 
 *  This is the default license template.
 *  
 *  File: receipt-container.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Receipt styled container featuring jagged edges at top and bottom
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './receipt-container.scss';

function ReceiptContainer({
  children,
  height,
  width,
}) {
  return (
    <div className={styles.receiptContainer}>
      <div className={styles.receiptContent}>
        {children}
      </div>
      <style jsx>
        {`
          .${styles.receiptContainer} {
            height: ${height};
            width: ${width};
          }

          .${styles.receiptContent} {
            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

ReceiptContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

ReceiptContainer.defaultProps = {
  height: '100%',
  width: '100%',
};

export { ReceiptContainer };
