/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { IconButton } from 'components/icon-button';
import { Button } from 'components/button';
import { Tooltip } from 'components/tooltip';
import { themes, useTheme } from '../theme-provider';
import styles from './text-input.scss';

const THEME_KEY = 'input';

const TextInput = ({
  buttons,
  className,
  dataSelector,
  hasError,
  label,
  labelClassName,
  inputClassName,
  useAltTheme,
  ...rest
}) => {
  const theme = useAltTheme
    ? themes.alt[THEME_KEY]
    : useTheme(THEME_KEY);
  const [inputId] = useState(`text-input-${uuidv1()}`);
  const hasMultipleButtons = buttons.length > 1;


  function getButtons() {
    if (buttons.length > 0) {
      return buttons.map((button, index) => {
        if (button.type.toLowerCase() === 'icon') {
          return (
            <div key={index}>
              <IconButton
                data-for={`tooltip-${index}`}
                data-tip
                className={classNames(styles['inline-button-icon'])}
                onClick={button.onClick}
                variant={theme.svgButtons}
                icon={<button.icon height="14px" width="14px" />}
              />
              <Tooltip
                content={button.tooltipText}
                Id={`tooltip-${index}`}
                place="top"
              />
            </div>
          );
        }

        return (
          <Button
            key={index}
            className="inline-button-text"
            onClick={button.onClick}
            variant={button.variant || 'primary'}
          >
            {button.text}
          </Button>
        );
      });
    }

    return null;
  }

  return (
    <>
      <div
        className={classNames(
          className,
          styles['text-input']
        )}
      >
        <label
          htmlFor={inputId}
          className={classNames(
            styles['text-input__label'],
            'text-input__label'
          )}
        >
          <span>
            {label}
          </span>
          <div className={classNames(
            styles['input-wrapper'],
          )}
          >
            <input
              {...rest}
              data-selector={dataSelector}
              className={classNames(
                styles['text-input__input'],
                hasError && styles['text-input__input-error'],
                label && styles['has-label'],
                'text-input__input',
                inputClassName
              )}
              id={inputId}
            />
            <div className={classNames(
              styles['button-group'],
              'button-group',
              hasMultipleButtons && styles['multiple-buttons']
            )}
            >
              {getButtons()}
            </div>
          </div>
        </label>
      </div>
      <style jsx>
        {`
          .text-input__label {
            color: ${theme.label};
          }

          .text-input__input {
            background: ${theme.bg};
            color: ${theme.textValue};
          }
        `}
      </style>
    </>
  );
};

TextInput.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.func,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    tooltipText: PropTypes.string,
  })),
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  buttons: [],
  className: '',
  dataSelector: '',
  disabled: false,
  label: '',
  labelClassName: '',
  inputClassName: '',
  maxLength: null,
  onBlur: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
  placeholder: '',
  type: 'text',
  value: '',
};

export { TextInput };
