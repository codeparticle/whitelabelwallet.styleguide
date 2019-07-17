/**
 * @file The basic tooltip component built using https://github.com/wwayne/react-tooltip
 * @author Gabriel Womble, Ashley Chen
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
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
        className="tooltip"
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
      <style jsx global>
        {`
          .__react_component_tooltip.type-dark {
            background: ${theme.bg} !important;
            border-color: ${theme.bg} !important;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
            color: ${theme.message} !important;

            &.place-top::after,
            &.place-bottom::after,
            &.place-left::after,
            &.place-right::after {
              border-top-width: 10px;
              border-bottom-width: 10px;
              border-left-width: 10px;
              border-right-width: 10px;
            }

            &.place-top::after {
              border-top-color: ${theme.bg} !important;
              box-shadow: 0px 2px 2px -5px ${theme.bg};
            }

            &.place-bottom::after {
              border-bottom-color: ${theme.bg} !important;
              box-shadow: 0px -5px 2px -5px ${theme.bg};
            }

            &.place-right::after {
              border-right-color: ${theme.bg} !important;
              box-shadow: -2px 1px 2px -5px ${theme.bg};
            }

            &.place-left::after {
              border-left-color: ${theme.bg} !important; 
              box-shadow: 2px 1px 2px -5px ${theme.bg};
            }
          }
        `}
      </style>
      <style jsx>
        {`
          @import 'styles/fonts.scss';

          .tooltip-content {
            font-size: $font-size-sm-1;
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

export default Tooltip;
