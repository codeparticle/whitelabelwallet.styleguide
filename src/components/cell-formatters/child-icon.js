/**
 * @fileoverview ChildIcon cellFormatter
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'svgs';

const { SvgChildArrow } = icons;

function ChildIcon({ style }) {
  if (!style) {
    return null;
  }

  return (
    <>
      <SvgChildArrow
        className="list-item__icon"
        fill={style}
      />
      <style jsx>
        {`
          @import 'styles/layout.scss';

          :global(.list-item__icon) {
            margin-right: $space-2;
          }
        `}
      </style>
    </>
  );
}

ChildIcon.propTypes = {
  style: PropTypes.string.isRequired,
};

export { ChildIcon };
