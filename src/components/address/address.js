/**
+ * @fileoverview Text Input Component
+ * @author Marc Mathieu
+ */
import React from 'react';
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
  const inputId = `address-${uuidv1()}`;

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
          styles['address-btn']
        )}
        onClick={onClick}
        variant={theme.button}
      >
        {buttonText}
      </Button>
      <style jsx>
        {`
          .${styles['address']} {
            background-color: ${theme.background};
          }
        `}
      </style>
    </div>
  );
};

Address.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Address.defaultProps = {
  buttonText: 'Add Address',
  className: '',
  disabled: false,
  inputClassName: '',
  maxLength: null,
  onBlur: null,
  onClick: null,
  onChange: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
  placeholder: '',
  value: '',
};

export default Address;
