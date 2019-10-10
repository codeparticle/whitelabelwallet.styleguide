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
