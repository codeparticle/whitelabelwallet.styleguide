/**
 * @fileoverview FlashAlert Component
 * @author Kevin Van Beek
 */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon, IconVariants } from 'components/icon';
import styles from './flash-alert.scss';
import { icons } from '../../svgs';

const { SvgClose } = icons;
const { TERTIARY } = IconVariants;

const FlashAlert = ({
  className,
  message,
  type,
  show,
  onClose,
  duration,
  timeout,
  alertButton,
  height,
  ...rest
}) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let notificationTimer;
    if (show) {
      setShowMessage(true);
      notificationTimer = setTimeout(() => {
        setShowMessage(false);
      }, duration);
    } else {
      setShowMessage(false);
    }

    return () => {
      clearTimeout(notificationTimer);
    };
  }, [show]);

  const handleCloseClicked = () => {
    setShowMessage(false);
  };

  const btn = alertButton || (
    <Icon
      variant={TERTIARY}
      onClick={handleCloseClicked}
      icon={<SvgClose />}
    />
  );

  return (
    <>
      <CSSTransition
        in={showMessage}
        timeout={timeout}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        onExited={onClose}
        unmountOnExit
        {...rest}
      >
        <div
          className={classNames(
            styles.alert,
            styles[type],
            className
          )}
        >
          {message}
          {btn}
        </div>
      </CSSTransition>
      <style jsx>
        {`
          .${styles.alert} {
            height: ${height};
          }
        `}
      </style>
    </>
  );
};

FlashAlert.propTypes = {
  alertButton: PropTypes.node,
  duration: PropTypes.number,
  height: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  timeout: PropTypes.number,
  type: PropTypes.oneOf(['fail', 'success']),
};

FlashAlert.defaultProps = {
  alertButton: null,
  duration: 3000,
  height: 'auto',
  message: '',
  show: false,
  timeout: 300,
  type: 'fail',
};

export { FlashAlert };
