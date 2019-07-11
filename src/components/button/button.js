import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = ({
  className,
  children,
  disabled,
  fullWidth,
  ...rest
}) => {
  const finalClassName = classNames(
    styles.button,
    fullWidth && styles.fullWidth,
    className
  );

  return (
    <button
      {...rest}
      className={finalClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullWidth: false,
};

export default Button;
