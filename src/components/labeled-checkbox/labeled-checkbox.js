/* 
 *  This is the default license template.
 *  
 *  File: labeled-checkbox.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview One-off checkbox for the signup page
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import Case from 'case';
import { white } from 'styles/colors.scss';
import styles from './labeled-checkbox.scss';

const renderProp = Prop => (typeof Prop === 'function' ? <Prop /> : Prop);

function renderLabel(label) {
  return typeof label === 'string'
    ? <span>{label}</span>
    : renderProp(label);
}

export function LabeledCheckbox({
  checked,
  dataSelector,
  label,
  onChange,
  color,
  ...props
}) {
  const id = typeof label === 'string' ? Case.kebab(label) : props.id;

  function handleCheck() {
    onChange(!checked);
  }

  return (
    <>
      <div className={styles['labeled-checkbox']}>
        <input
          data-selector={dataSelector}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleCheck}
        />
        { /* eslint-disable-next-line jsx-a11y/label-has-for */ }
        <label id={id} htmlFor={id}>
          {renderLabel(label)}
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
  /* eslint-disable-next-line */
  id: function (props, propName) {
    const thisProp = props[propName];

    // If label isn't string and id is null or undefined, throw prop error
    if (typeof props.label !== 'string' && (thisProp === null || thisProp === undefined)) {
      return new Error(`The prop \`${propName}\` is required when the prop \`label\` is not a string.`);
    }

    // PropCheck is OK; Return null
    return null;
  },
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

LabeledCheckbox.defaultProps = {
  color: white,
  dataSelector: '',
};
