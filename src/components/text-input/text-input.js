/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { themes, useTheme } from '../theme-provider';
import styles from './text-input.scss';

const THEME_KEY = 'input';

const TextInput = ({
  className,
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
          <input
            {...rest}
            className={classNames(
              styles['text-input__input'],
              hasError && styles['text-input__input-error'],
              label && styles['has-label'],
              'text-input__input',
              inputClassName
            )}
            id={inputId}
          />
        </label>
      </div>
      <style jsx="true">
        {`
          .text-input__label {
            color: ${theme.label};
          }

          .text-input__input {
            background: ${theme.bg};
            color: ${theme.textValue};
            height: ${useAltTheme ? '40px' : 'auto'};
          }
        `}
      </style>
    </>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  labelClassName: '',
  inputClassName: '',
  maxLength: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
  placeholder: '',
  type: 'text',
  value: '',
};

export { TextInput };
