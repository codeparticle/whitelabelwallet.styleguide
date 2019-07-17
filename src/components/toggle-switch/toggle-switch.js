/**
+ * @fileoverview Toggle Switch Component
+ * @author Marc Mathieu
+ * @editor Hun Kim
+ */
/**
+ * @fileoverview Toggle Switch Component
+ * @author Marc Mathieu
+ * @editor Hun Kim
+ */
import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { useTheme } from 'components/theme-provider';
import styles from './toggle-switch.scss';

const ToggleSwitch = ({
  onClick,
  value,
  ...rest
}) => {
  const inputId = `toggle-switch-${uuidv1()}`;
  const theme = useTheme('toggle');

  return (
    <div className={styles['toggle-switch']}>
      <label
        className={styles['toggle-switch-label']}
        htmlFor={inputId}
      >
        <input
          {...rest}
          onClick={onClick}
          type="checkbox"
          className={styles['toggle-switch-checkbox']}
          id={inputId}
          value={value}
        />
        <span className={styles['toggle-switch-slider']} />
        <span className={styles['toggle-switch-btn']} />
        <style jsx>
          {`
            .${styles['toggle-switch-slider']} {
                background: ${value ? theme.onBackground : theme.offBackground};
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
  onClick: PropTypes.func,
  value: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  className: '',
  onClick: null,
  value: false,
};

export default ToggleSwitch;
