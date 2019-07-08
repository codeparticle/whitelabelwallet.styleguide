/**
+ * @fileoverview Toggle Switch Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import styles from './toggle-switch.scss';

const ToggleSwitch = ({
  className,
  offLabel,
  onLabel,
  isDarkMode,
  children,
  disabled,
  fullWidth,
  ...rest
}) => {
  const [inputId] = useState(`toggle-switch-${uuidv1()}`);

  return (
    <label
      htmlFor={inputId}
      {...rest}
      className={classNames(
        className,
        styles['toggle-switch']
      )}
    >
      <input id={inputId} type="checkbox" />
      <span className={classNames(
        styles['slider']
      )}
      />
    </label>
  );
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  isDarkMode: PropTypes.bool,
  offLabel: PropTypes.string,
  onLabel: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  className: '',
  isDarkMode: false,
  offLabel: 'Off',
  onLabel: 'On',
};

export { ToggleSwitch };
