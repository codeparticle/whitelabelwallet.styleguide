/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import styles from './text-input.scss';

const TextInput = ({
  className,
  label,
  labelClassName,
  inputClassName,
  isDarkMode,
  ...rest
}) => {
  const [inputId] = useState(`text-input-${uuidv1()}`);

  return (
    <div
      className={classNames(
        styles['text-input']
      )}
    >
      <label
        htmlFor={inputId}
        className={classNames(
          styles['text-input__label'],
          isDarkMode && styles['text-input__dark'],
        )}
      >
        <span>
          {label}
        </span>
        <input
          {...rest}
          className={classNames(
            styles['text-input__input'],
            label && styles['has-label'],
            inputClassName
          )}
          id={inputId}
        />
      </label>
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  isDarkMode: PropTypes.bool,
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
  isDarkMode: false,
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

export default TextInput;
