/* 
 *  This is the default license template.
 *  
 *  File: toggle-switch.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
+ * @fileoverview Toggle Switch Component
+ * @author Marc Mathieu
+ */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { useTheme } from '../theme-provider';
import styles from './toggle-switch.scss';

const ToggleSwitch = ({
  className,
  dataSelector,
  onClick,
  value,
  ...rest
}) => {
  const inputId = `toggle-switch-${uuidv1()}`;
  const theme = useTheme('toggle');

  return (
    <div className={classNames(styles['toggle-switch'])}>
      <label
        className={classNames(
          styles['toggle-switch-label']
        )}
        htmlFor={inputId}
      >
        <input
          {...rest}
          onClick={onClick}
          type="checkbox"
          className={classNames(styles['toggle-switch-checkbox'], { [styles.slide]: value })}
          id={inputId}
          value={value}
        />
        <span className={classNames(styles['toggle-switch-slider'])} data-selector={`${dataSelector}-${value}`} />
        <span className={classNames(styles['toggle-switch-btn'])} data-selector={dataSelector} />
        <style jsx>
          {`
            .${styles['toggle-switch-slider']} {
              background-color: ${value ? theme.onBackground : theme.offBackground};
              color: ${theme.fontColor};
            }
            .${styles['toggle-switch-btn']} {
              background-color: ${theme.button};
            }
          `}
        </style>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  className: '',
  dataSelector: '',
  onClick: null,
  value: false,
};

export { ToggleSwitch };
