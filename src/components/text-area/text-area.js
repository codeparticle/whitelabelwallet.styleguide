/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import styles from './text-area.scss';

const TextArea = ({
  className,
  label,
  labelClassName,
  textAreaClassName,
  isDarkMode,
  ...rest
}) => {
  const [inputId] = useState(`text-area-${uuidv1()}`);

  return (
    <div
      className={classNames(
        className,
        styles['text-area']
      )}
    >
      <label
        htmlFor={inputId}
        className={classNames(
          styles['text-area__label'],
          isDarkMode && styles['text-area__dark'],
        )}
      >
        <span>
          {label}
        </span>
        <textarea
          className={classNames(
            styles['text-area__input'],
            label && styles['has-label'],
            textAreaClassName
          )}
          id={inputId}
          rows="5"
          cols="33"
          {...rest}
        />
      </label>
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  textAreaClassName: PropTypes.string,
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

TextArea.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  labelClassName: '',
  textAreaClassName: '',
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

export default TextArea;
