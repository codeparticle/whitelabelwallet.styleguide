/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { useTheme } from '../theme-provider';
import TextInput from '../text-input';
import Button from '../button';
import styles from './address.scss';

const Address = ({
  className,
  inputClassName,
  buttonText,
  value,
  onChange,
  placeholder,
  onClick,
  ...rest
}) => {
  const theme = useTheme('address');
  const [inputId] = useState(`address-${uuidv1()}`);

  return (
    <div className={classNames(styles['address'])}>
      <TextInput
        {...rest}
        id={inputId}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Button
        className={classNames(
          styles['address-btn'],
          'address-btn'
        )}
        inlineStyle={
          <style jsx>
            {`
              button {
                background-color: ${theme.button};
              }
            `}
          </style>
        }
        onClick={onClick}
      >
        {buttonText}
      </Button>

    </div>
  );
};

Address.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Address.defaultProps = {
  className: '',
  disabled: false,
  inputClassName: '',
  maxLength: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
  placeholder: '',
  value: '',
};

export default Address;
