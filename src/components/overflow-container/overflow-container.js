/* 
 *  This is the default license template.
 *  
 *  File: overflow-container.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Overflow Container - simple container that allows scrolling content
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'components/theme-provider';

function OverflowContainer({
  children,
  dataSelector,
  height,
  width,
}) {
  const theme = useTheme('overflow');

  return (
    <>
      <div className="overflow-container">
        <div className="overflow-container__content" data-selector={dataSelector}>
          {children}
        </div>
      </div>
      <style jsx>
        {`
          @import 'styles/fonts.scss';
          @import 'styles/layout.scss';

          .overflow-container {
            background: ${theme.bg};
            border-radius: $border-radius-3;
            height: ${height};
            overflow: auto;
            padding: $spacing-m;
            width: ${width};

            &__content {
              color: ${theme.color} !important;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

OverflowContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
  ]),
  dataSelector: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

OverflowContainer.defaultProps = {
  children: null,
  dataSelector: '',
  height: '100%',
  width: '100%',
};

export { OverflowContainer };
