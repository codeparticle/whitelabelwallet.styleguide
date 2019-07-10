import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import SelectInput, { components } from 'react-select';
import { useTheme } from '../theme-provider';
import styles from './select.scss';

const Option = ({
  className,
  ...props
}) => (
  <components.Option
    {...props}
    className={classNames(
      styles['select-input__option'],
      className
    )}
  />
);

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
    Option,
    IndicatorSeparator: () => null,
  };

  /**
  * The select component is using react-select’s styling methods. This was done as the component was not working nicely alongside jsx styles.
  * React select has several classNames that would need to be updated and requires multiple classes to be overridden to get the expected results.
  * Using react-select's own styling system prevents these issues.
  */
  const customStyles = {
    control: (base, { menuIsOpen }) => ({
      ...base,
      'borderStyle': 'none',
      'borderRadius': 6,
      'border-bottom-left-radius': menuIsOpen ? 0 : null,
      'border-bottom-right-radius': menuIsOpen ? 0 : null,
      'minHeight': 36,
      'backgroundColor': menuIsOpen ? theme.bgFocused : theme.bg,
      'boxShadow': menuIsOpen ? theme.shadow : 0,
    }),
    singleValue: base => ({
      ...base,
      color: theme.selectText,
    }),
    input: base => ({
      ...base,
      color: theme.selectText,
      margin: 0,
      paddingBottom: 0,
      paddingTop: 0,
    }),
    dropdownIndicator: (base, { isFocused }) => ({
      ...base,
      color: isFocused ? theme.selectFocus : theme.selectText,
    }),
    menu: base => ({
      ...base,
      'borderRadius': 0,
      'border-bottom-left-radius': 6,
      'border-bottom-right-radius': 6,
      'marginTop': 0,
      'boxShadow': theme.shadow,
      'background': theme.bgFocused,
      '&:before': {
        'background': theme.bgFocused,
        'display': 'block',
        'content': '"."',
        'fontSize': 0,
        'position': 'relative',
        'top': -4,
        'height': 5,
        'left': 0,
        'zIndex': 10,
        'border-bottom': `1px solid ${theme.bg}`,
      },
    }),
    option: (base, state) => ({
      ...base,
      'backgroundColor': state.isSelected ? theme.bg : theme.bgFocused,
      '&:active': {
        backgroundColor: theme.bg,
      },
      'color': state.isSelected ? theme.selectedOption : theme.optionText,
      'padding': '0px 10px',
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
