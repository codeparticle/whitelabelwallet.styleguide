/* 
 *  This is the default license template.
 *  
 *  File: text.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Text cellFormatter
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';

function Text({ value }) {
  return (
    <p className="list-item__text">
      {value}
    </p>
  );
}

Text.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export { Text };
