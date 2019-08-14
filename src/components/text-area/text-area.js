/**
+ * @fileoverview Text Area Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { useTheme } from '../theme-provider';
import styles from './text-area.scss';

const TextArea = ({
  className,
  customColor,
  label,
  labelClassName,
  textAreaClassName,
  ...rest
}) => {
  const theme = useTheme('input');
  const [inputId] = useState(`text-area-${uuidv1()}`);

  return (
    <>
      <div
        className={classNames(
          className,
          styles['text-area'],
          'text-area'
        )}
      >
        <label
          htmlFor={inputId}
          className={classNames(
            styles['text-area__label'],
            'text-area__label',
          )}
        >
          <span>
            {label}
          </span>
          <textarea
            className={classNames(
              styles['text-area__input'],
              label && styles['has-label'],
              'text-area__input',
              textAreaClassName
            )}
            id={inputId}
            {...rest}
          />
        </label>
      </div>
      <style jsx>
        {`
          .text-area__label {
            color: ${theme.label};
          }

          .text-area__input {
            background: ${customColor || theme.bg};
            color: ${theme.textValue};
          }
        `}
      </style>
    </>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  textAreaClassName: PropTypes.string,
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
  maxLength: null,
  label: '',
  labelClassName: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
  placeholder: '',
  textAreaClassName: '',
  type: 'text',
  value: '',
};

export { TextArea };
