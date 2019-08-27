import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = ({
  className,
  children,
  dataSelector,
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
      data-selector={dataSelector}
      className={buttonClass}
    >
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
    'slate-clear',
    'green',
    'slate',
    'alert',
    'teal',
  ]),
  size: PropTypes.oneOf([
    '',
    'full',
    'lg',
    'sm',
  ]),
};

Button.defaultProps = {
  children: null,
  className: '',
  dataSelector: '',
  variant: '',
  size: '',
};

export { Button };
