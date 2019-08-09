/**
 * @fileoverview Cell Formatters for the WLW List
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'svgs';
import { fontSizeSm3 } from 'styles/fonts.scss';
import { space2 } from 'styles/layout.scss';

const { SvgChildArrow } = icons;

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

function ChildCount({ childCount, style }) {
  if (!childCount || !style) {
    return null;
  }

  return (
    <>
      <div className="child-count-container">
        <Text value={childCount} />
      </div>
      <style jsx="true">
        {`
          .child-count-container {
            align-items: center;
            background: ${style.background};
            border-radius: 25px;
            color: ${style.color};
            display: flex;
            height: ${fontSizeSm3};
            justify-content: center;
            margin: 0 ${space2};
            min-width: ${fontSizeSm3};
            padding: ${space2};
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
      <style jsx="true">
        {`
          @import 'styles/layout.scss';

          :global(.list-item__icon) {
            margin-right: ${space2};
          }
        `}
      </style>
    </>
  );
}

ChildIcon.propTypes = {
  style: PropTypes.string.isRequired,
};

export const cellFormatters = {
  ChildCount,
  ChildIcon,
  Text,
};
