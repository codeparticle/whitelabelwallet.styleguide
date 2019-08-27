/**
 * @fileoverview One-off checkbox for the signup page
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import Case from 'case';
import { white } from 'styles/colors.scss';
import styles from './labeled-checkbox.scss';

export function LabeledCheckbox({
  checked,
  dataSelector,
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
      <div className={styles['labeled-checkbox']} data-selector={dataSelector}>
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
              .${styles['labeled-checkbox']} {
                color: ${color};
              }
            `
          }
        </style>
      </div>
    </>
  );
}

LabeledCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  dataSelector: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

LabeledCheckbox.defaultProps = {
  color: white,
  dataSelector: '',
};
