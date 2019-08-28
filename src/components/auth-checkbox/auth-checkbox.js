/**
 * @fileoverview One-off checkbox for the signup page
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import Case from 'case';
import { white } from 'styles/colors.scss';
import styles from './auth-checkbox.scss';

export function AuthCheckbox({
  checked,
  label,
  onChange,
  color,
}) {
  const id = Case.kebab(label);

  function handleCheck() {
    onChange(!checked);
  }

  return (
    <>
      <div className={`${styles['auth-checkbox']} auth-checkbox`}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleCheck}
        />
        { /* eslint-disable-next-line jsx-a11y/label-has-for */ }
        <label id={id} htmlFor={id}>
          <span>{label}</span>
        </label>
        <style jsx>
          {
            `
              auth-checkbox {
                color: ${color};
              }
            `
          }
        </style>
      </div>
    </>
  );
}

AuthCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

AuthCheckbox.defaultProps = {
  color: white,
};
