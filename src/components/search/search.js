/**
 * @fileoverview Search Component with Search Icon
 * @author Gabriel Womble
 */
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from '../theme-provider';
import styles from './search.scss';
import { icons } from '../../svgs';

const { SvgMagnifyingGlass } = icons;

const getIconFill = (theme, isActive) => {
  const { colorBlur, iconFocus } = theme;
  const iconFill = isActive ? iconFocus : colorBlur;

  return iconFill;
};

const Search = ({
  onSubmit,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme('search');
  const iconFill = getIconFill(theme, isActive);

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
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search...',
};

export { Search };
