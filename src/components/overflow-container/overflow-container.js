/**
 * @fileoverview Overflow Container - simple container that allows scrolling content
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'components/theme-provider';

function OverflowContainer({
  children,
  height,
  width,
}) {
  const theme = useTheme('overflow');

  return (
    <>
      <div className="overflow-container">
        <div className="overflow-container__content">
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
  height: PropTypes.string,
  width: PropTypes.string,
};

OverflowContainer.defaultProps = {
  children: null,
  height: '100%',
  width: '100%',
};

export { OverflowContainer };
