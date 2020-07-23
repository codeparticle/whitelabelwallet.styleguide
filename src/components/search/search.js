/* 
 *  This is the default license template.
 *  
 *  File: search.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Search Component with Search Icon
 * @author Gabriel Womble
 * @editor Kevin Van Beek
 */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { icons } from 'svgs';
import { useTheme } from '../theme-provider';
import styles from './search.scss';

const { SvgMagnifyingGlass } = icons;

const getIconFill = (theme, isActive) => {
  const { colorBlur, iconFocus } = theme;
  const iconFill = isActive ? iconFocus : colorBlur;

  return iconFill;
};

const Search = ({
  autoSearch,
  dataSelector,
  onSubmit,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme('search');
  const iconFill = getIconFill(theme, isActive);

  useEffect(() => {
    if (autoSearch && searchValue.length > 3) {
      onSubmit(searchValue);
    }
  }, [autoSearch, searchValue]);

  function handleChange(e) {
    if (e) {
      e.preventDefault();
    }

    setSearchValue(e.target.value);
  }

  function handleBlur() {
    if (isActive) {
      setIsActive(false);
    }
  }

  function handleFocus() {
    if (!isActive) {
      setIsActive(true);
    }
  }

  function handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    onSubmit(searchValue);
  }

  return (
    <>
      <form
        isactive={isActive.toString()}
        className={classNames(
          styles.search,
          'search'
        )}
        onSubmit={handleSubmit}
      >
        <div
          className={classNames(
            styles['search__icon'],
            'search__icon'
          )}
        >
          <SvgMagnifyingGlass
            fill={iconFill}
          />
        </div>
        <input
          data-selector={dataSelector}
          className={classNames(
            styles['search__input'],
            'search__input'
          )}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          value={searchValue}
        />
      </form>
      <style jsx>
        {`
          .search {
            background: ${isActive ? theme.bgFocus : theme.bgBlur};
            border: 1px solid ${isActive ? theme.borderFocus : theme.colorBlur};
            color: ${theme.colorBlur};
          }

          .search__input {
            color: ${theme.textValue};
          }

          .search__input::placeholder {
            color: ${theme.textPlaceholder};
          }
        `}
      </style>
    </>
  );
};

Search.propTypes = {
  autoSearch: PropTypes.bool,
  dataSelector: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  autoSearch: true,
  dataSelector: '',
  placeholder: 'Search...',
};

export { Search };
