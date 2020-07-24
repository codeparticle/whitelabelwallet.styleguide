/**
 * @fileoverview ChildCount cellFormatter
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './text';

function ChildCount({ childCount, style }) {
  if (!childCount || !style) {
    return null;
  }

  return (
    <>
      <div className="child-count-container">
        <Text value={childCount} />
      </div>
      <style jsx>
        {`
          @import 'styles/layout.scss';
          @import 'styles/fonts.scss';
        
          .child-count-container {
            align-items: center;
            background: ${style.background};
            border-radius: 25px;
            color: ${style.color};
            display: flex;
            height: $font-size-sm-3;
            justify-content: center;
            margin: 0 $space-2;
            min-width: $font-size-sm-3;
            padding: $space-2;
          }
        `}
      </style>
    </>
  );
}

ChildCount.propTypes = {
  childCount: PropTypes.number,
  style: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

ChildCount.defaultProps = {
  childCount: 0,
};

export { ChildCount };
