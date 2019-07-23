import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './icon.scss';

const Icon = ({
  className,
  variant,
  icon,
  ...rest
}) => {
  const iconClass = classNames(
    styles.icon,
    styles[variant],
    className
  );

  return (
    <button
      {...rest}
      className={iconClass}
    >
      {icon}
    </button>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.node,
};

Icon.defaultProps = {
  className: '',
  variant: '',
  icon: null,
};

export { Icon };
