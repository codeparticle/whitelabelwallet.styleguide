/**
 * @file The basic tooltip component built using https://github.com/wwayne/react-tooltip
 * @author Gabriel Womble, Ashley Chen
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { useTheme } from '../theme-provider';

const Tooltip = ({
  className,
  clickable,
  content,
  dataSelector,
  effect,
  Id,
  place,
  ...rest
}) => {
  const theme = useTheme('tooltip');

  return (
    <>
      <ReactTooltip
        className={className || 'tooltip'}
        clickable={clickable}
        id={Id}
        effect={effect}
        place={place}
        {...rest}
      >
        <span className="tooltip-content" data-selector={dataSelector}>
          {content}
        </span>
      </ReactTooltip>
      <style jsx global>
        {`
          @import 'styles/layout.scss';

          .__react_component_tooltip.type-dark {
            background: ${theme.bg} !important;
            border-color: ${theme.bg} !important;
            border-radius: 6px !important;
            box-shadow: 0px 2px 6px -2px #888;
            color: ${theme.message} !important;
            padding: $space-1 $space-4 !important;

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
            font-size: $font-size-xs-3;
          }
        `}
      </style>
    </>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  clickable: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  dataSelector: PropTypes.string,
  effect: PropTypes.oneOf(['float', 'solid']),
  Id: PropTypes.string.isRequired,
  place: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  className: '',
  clickable: false,
  dataSelector: '',
  effect: 'solid',
  place: 'top',
};

export { Tooltip };
