import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import SelectInput, { components } from 'react-select';
import { useTheme } from '../theme-provider';
import styles from './select.scss';

const Control = ({
  children,
  className,
  ...props
}) => (
  <components.Control
    {...props}
    className={classNames(
      styles['select-input__control'],
      className
    )}
  >
    {children}
  </components.Control>
);

const Select = (props) => {
  const [inputId] = useState(`select-input-${uuidv1()}`);
  const theme = useTheme('select');

  const selectComponents = {
    Control,
    IndicatorSeparator: () => null,
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderStyle: 'none',
      borderRadius: 6,
      minHeight: 36,
      backgroundColor: theme.bg,
      boxShadow: state.isFocused ? 0 : 0,
    }),
    singleValue: base => ({
      ...base,
      color: theme.textValue,
    }),
    input: base => ({
      ...base,
      color: theme.textValue,
      margin: 0,
      paddingBottom: 0,
      paddingTop: 0,
    }),
    dropdownIndicator: base => ({
      ...base,
      color: theme.textValue,
    }),
  };

  return (
    <SelectInput
      {...props}
      styles={customStyles}
      components={selectComponents}
      id={inputId}
    />
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  onChange: null,
  placeholder: 'Select...',
  options: [],
};

export { Select };
