import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { icons } from '../../svgs';
import { themes, useTheme } from '../theme-provider';
import styles from './header.scss';

const { SvgClose } = icons;
const THEME_KEY = 'header';

const Header = ({
  className,
  minimalStyle,
  Icon,
  title,
  subTitle,
  onClose,
  useAltTheme,
  ...rest
}) => {
  const inputId = `header-${uuidv1()}`;
  const theme = useAltTheme
    ? themes.alt[THEME_KEY]
    : useTheme(THEME_KEY);

  const renderCloseButton = () => {
    if (onClose) {
      return (
        <button
          onClick={onClose}
          className={classNames(
            styles['header__close']
          )}
        >
          <SvgClose fill={theme.closeBtn} />
        </button>
      );
    }
    return null;
  };

  return (
    <div
      id={inputId}
      {...rest}
      className={classNames(
        styles['header'],
        className
      )}
    >
      {renderCloseButton()}
      <div className={classNames(
        styles['icon-wrapper']
      )}
      >
        {Icon && (
          <Icon fill={theme.svgFill} />
        )}
      </div>
      <div className={classNames(
        styles['header__title'],
        subTitle && !minimalStyle && styles['with-subtitle'],
      )}
      >{title}
      </div>
      {subTitle && !minimalStyle && (
        <div className={classNames(styles['header__sub-title'])}>{subTitle}</div>
      )}
      <style jsx>
        {`
          .${styles['header']} {
            background: ${minimalStyle ? 'transparent' : theme.bg};
            padding-bottom: ${minimalStyle ? 0 : '10%'};
          }
        `}
      </style>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  minimalStyle: PropTypes.bool,
  Icon: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  useAltTheme: PropTypes.bool,
};

Header.defaultProps = {
  className: '',
  minimalStyle: false,
  onClose: null,
  subTitle: '',
  title: '',
  useAltTheme: false,
};

export { Header };
