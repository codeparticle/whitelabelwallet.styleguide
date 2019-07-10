import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = ({
  className,
  children,
  variant,
  size,
  ...rest
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[`btn-${size}`],
    className
  );

  return (
    <button
      {...rest}
      className={buttonClass}
    >
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
  variant: '',
  size: '',
};

export { Button };
