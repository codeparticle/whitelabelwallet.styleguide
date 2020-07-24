import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './icon-button.scss';

const IconButton = ({
  className,
  dataSelector,
  variant,
  icon,
  ...rest
}) => {
  const iconClass = classNames(
    styles.iconButton,
    styles[variant],
    className
  );

  return (
    <button
      {...rest}
      data-selector={dataSelector}
      className={iconClass}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.node,
};

IconButton.defaultProps = {
  className: '',
  dataSelector: '',
  variant: '',
  icon: null,
};

export { IconButton };
