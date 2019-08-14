import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuidv1 from 'uuid/v1';
import { icons } from '../../svgs';
import { useTheme } from '../theme-provider';
import styles from './header.scss';

const { SvgClose } = icons;

const Header = ({
  className,
  Icon,
  title,
  subTitle,
  onClose,
  ...rest
}) => {
  const inputId = `header-${uuidv1()}`;
  const theme = useTheme('header');

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
        <Icon fill={theme.svgFill} />
      </div>
      <div className={classNames(
        styles['header__title'],
        subTitle && styles['with-subtitle'],
      )}
      >{title}
      </div>
      <div className={classNames(styles['header__sub-title'])}>{subTitle}</div>
      <style jsx>
        {`
          .${styles['header']} {
            background: ${theme.bg};
          }
        `}
      </style>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

Header.defaultProps = {
  className: '',
  onClose: null,
  subTitle: '',
  title: '',
};

export { Header };
