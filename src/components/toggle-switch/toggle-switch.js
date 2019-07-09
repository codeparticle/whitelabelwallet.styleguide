/**
+ * @fileoverview Toggle Switch Component
+ * @author Marc Mathieu
+ */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { useTheme } from '../theme-provider';
import styles from './toggle-switch.scss';

const ToggleSwitch = ({
  className,
  onClick,
  ...rest
}) => {
  const [inputId] = useState(`toggle-switch-${uuidv1()}`);
  const theme = useTheme('toggle');


  return (
    <div
      className={classNames(
        styles['toggle-switch'],
        'toggle-switch'
      )}
    >
      <label
        className={classNames(
          styles['toggle-switch-label'],
          'toggle-switch-label'
        )}
        htmlFor={inputId}
      >
        <input {...rest} onClick={onClick} type="checkbox" className={classNames(styles['toggle-switch-checkbox'])} id={inputId} />
        <span className={classNames(
          styles['toggle-switch-slider'],
          'toggle-switch-slider')}
        />
        <span className={classNames(
          styles['toggle-switch-btn'],
          'toggle-switch-btn'
        )}
        />
        <style jsx>
          {`
              .toggle-switch-slider {
                &:before {
                  background-color: ${theme.onBackground};
                }
                &.toggle-switch-slider:after {
                  background-color: ${theme.offBackground};
                }
              }
            `}
        </style>
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  className: '',
  onClick: null,
};

export { ToggleSwitch };
