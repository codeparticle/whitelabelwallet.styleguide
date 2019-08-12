/**
 * @file The basic tooltip component built using https://github.com/wwayne/react-tooltip
 * @author Gabriel Womble, Ashley Chen
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { fontSizeXs3 } from 'styles/fonts.scss';
import { useTheme } from '../theme-provider';

const Tooltip = ({
  clickable,
  content,
  Id,
  place,
  ...rest
}) => {
  const theme = useTheme('tooltip');

  return (
    <>
      <ReactTooltip
        className="custom-tooltip"
        clickable={clickable}
        id={Id}
        effect="solid"
        place={place}
        {...rest}
      >
        <span className="tooltip-content">
          {content}
        </span>
      </ReactTooltip>
      <style jsx="true" global="true">
        {`
          .custom-tooltip {
            background: ${theme.bg} !important;
            border-color: ${theme.bg} !important;
            border-radius: 6px !important;
            color: ${theme.message} !important;
          }

          .custom-tooltip.place-top::after,
          .custom-tooltip.place-bottom::after,
          .custom-tooltip.place-left::after,
          .custom-tooltip.place-right::after {
            border-width: 10px !important;
          }

          .custom-tooltip.place-top::after {
            border-top-color: ${theme.bg} !important;
            box-shadow: 0px 2px 2px -5px ${theme.bg};
          }

          .custom-tooltip.place-bottom::after {
            border-bottom-color: ${theme.bg} !important;
            box-shadow: 0px -5px 2px -5px ${theme.bg};
          }

          .custom-tooltip.place-right::after {
            border-right-color: ${theme.bg} !important;
            box-shadow: -2px 1px 2px -5px ${theme.bg};
          }

          .custom-tooltip.place-left::after {
            border-left-color: ${theme.bg} !important; 
            box-shadow: 2px 1px 2px -5px ${theme.bg};
          }
        `}
      </style>
      <style jsx>
        {`
          .tooltip-content {
            font-size: ${fontSizeXs3};
          }
        `}
      </style>
    </>
  );
};

Tooltip.propTypes = {
  clickable: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  Id: PropTypes.string.isRequired,
  place: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  clickable: false,
  place: 'top',
};

export { Tooltip };
