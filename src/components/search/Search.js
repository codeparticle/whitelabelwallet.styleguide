/**
 * @fileoverview Search Component with Search Icon
 * @author Gabriel Womble
 */
import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Search.scss';
import colors from '../../styles/colors.scss';
import { MagnifyingGlassIcon } from '../../images';

const {
  blue,
  grey,
  'cool-grey-dark': coolGrey,
  'dark-bg': darkBg,
} = colors;

/**
 * @returns {string} The color hex for the search icon svg fill
 * @param {bool} isActive - condition for if form is active
 * @param {bool} isDarkMode - condition for if dark theme is active
 */
const getFillColor = (isActive, isDarkMode) => {
  let fill = grey;

  if (isActive && !isDarkMode) {
    fill = blue;
  }

  if (isDarkMode) {
    fill = coolGrey;

    if (isActive) {
      fill = darkBg;
    }
  }

  return fill;
};

const Search = ({
  onSubmit,
  placeholder,
  theme,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const isDarkMode = theme === 'dark';
  const fillColor = getFillColor(isActive, isDarkMode);

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
    <Fragment>
      <form
        className={classNames(
          styles.search,
          isDarkMode && styles['search-dark'],
          isActive && styles['search-active']
        )}
        onSubmit={handleSubmit}
      >
        <div
          className={classNames(
            styles['search__icon'],
            isDarkMode && styles['search__icon-dark'],
            isActive && styles['search__icon-active']
          )}
        >
          <MagnifyingGlassIcon
            fill={fillColor}
          />
        </div>
        <input
          className={classNames(
            styles['search__input'],
            isDarkMode && styles['search__input-dark'],
            isActive && styles['search__input-active']
          )}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          value={searchValue}
        />
      </form>
    </Fragment>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  theme: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search...',
  theme: 'Light',
};

export default Search;
