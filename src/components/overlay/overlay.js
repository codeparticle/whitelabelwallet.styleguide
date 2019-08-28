import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidepanel from '@codeparticle/react-sidenav';
import { Visible } from '@codeparticle/react-visible';
import { AuthCheckbox } from 'components/auth-checkbox';
import { Header } from 'components/header';
import { Button } from 'components/button';
import { white } from 'styles/colors.scss';
import { zIndexMiddle, zIndexTop } from 'styles/layout.scss';
import { useTheme } from '../theme-provider';
import { TYPES } from './constants';
import styles from './overlay.scss';

const {
  OVERLAY,
  SIDEPANEL,
} = TYPES;

const sidePanelMinWidth = 540;

function calculateWidth(innerWidth) {
  const optimalWidth = innerWidth / 3;

  return sidePanelMinWidth >= optimalWidth
    ? sidePanelMinWidth
    : optimalWidth;
}

function handleSidePanelResize(innerWidth, setFn) {
  const calculatedWidth = calculateWidth(innerWidth);

  setFn(`${calculatedWidth}px`);
}

export function Overlay({
  background,
  cancelButtonText,
  checkBoxLabel,
  children,
  footerButtonText,
  Icon,
  hasCancelButton,
  hasCheckbox,
  onCancelClick,
  onClick,
  onClose,
  isOpen,
  disableFooterButton,
  hasFooter,
  subTitle,
  title,
  type,
  useAltTheme,
}) {
  const theme = useTheme('overlay');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0);
  const [width, setWidth] = useState(type === OVERLAY ? '100%' : `${calculateWidth(windowWidth)}px`);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disableFooterButton);
  const color = type === OVERLAY ? white : theme.color;

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    if (type === OVERLAY) {
      setWidth('100%');
    }
  }, [type]);

  useEffect(() => {
    if (type === SIDEPANEL) {
      handleSidePanelResize(windowWidth, setWidth);
    }
  }, [type, windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Effect only runs twice: mount & unmount

  useEffect(() => {
    setIsDisabled(disableFooterButton);
  }, [disableFooterButton]);

  const renderFooter = (overlayType) => {
    if (!hasFooter) {
      return null;
    }

    if (overlayType === SIDEPANEL) {
      const handleCheck = (checkValue) => {
        setIsChecked(checkValue);
        setIsDisabled(!checkValue);
      };

      return (
        <div className={styles.sidepanelFooter}>
          <Visible when={hasCancelButton}>
            <Button
              onClick={onCancelClick}
              className="footer-btn"
            >
              {cancelButtonText}
            </Button>
          </Visible>
          <Visible when={!hasCancelButton && hasCheckbox}>
            <AuthCheckbox
              label={checkBoxLabel}
              checked={isChecked}
              onChange={handleCheck}
              color={color}
            />
          </Visible>

          <Button
            className={styles.footerBtn}
            disabled={isDisabled}
            onClick={onClick}
            variant="primary"
          >
            {footerButtonText}
          </Button>
          <style jsx>
            {
              `
                .${styles.sidepanelFooter} {
                  background: ${theme.footerBackground};
                  justify-content: ${hasCheckbox ? 'space-between' : 'flex-end'};
                }
              `
            }
          </style>
        </div>
      );
    }

    return (
      <div className={styles.overlayFooter}>
        <Button
          onClick={onClick}
          variant="primary"
        >
          {footerButtonText}
        </Button>
      </div>
    );
  };


  return (
    <>
      <Sidepanel
        fixed
        right
        backgroundColor={background || theme[type]}
        isOpen={isOpen}
        onStateChange={onClose}
        width={width}
        zIndex={parseInt(type === OVERLAY ? zIndexTop : zIndexMiddle, 10)}
      >
        <div className={`content ${type}`}>
          <div className={styles.header}>
            <Header
              Icon={Icon}
              hideBackground={type === OVERLAY}
              onClose={onClose}
              subTitle={type === OVERLAY ? null : subTitle}
              title={title}
              useAltTheme={useAltTheme}
            />
          </div>
          <div className="sidepanel-content">
            {children}
          </div>
          {renderFooter(type)}
        </div>
      </Sidepanel>
      <style jsx>
        {`
          .content {
            color: ${color};
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: auto;
            width: 100%;
          }
          .sidepanel-content {
            flex: 1;
            flex-shrink: 0;
          }

          .overlay {
            overflow: scroll;
            padding: 10%;
          }

        `}
      </style>
    </>
  );
}

Overlay.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  cancelButtonText: PropTypes.string,
  checkBoxLabel: PropTypes.string,
  Icon: PropTypes.func,
  isOpen: PropTypes.bool,
  disableFooterButton: PropTypes.bool,
  footerButtonText: PropTypes.string,
  hasCancelButton: PropTypes.bool,
  hasCheckbox: PropTypes.bool,
  hasFooter: PropTypes.bool,
  onCancelClick: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    OVERLAY,
    SIDEPANEL,
  ]),
  useAltTheme: PropTypes.bool,
};

Overlay.defaultProps = {
  background: '',
  cancelButtonText: 'Cancel',
  checkBoxLabel: '',
  Icon: null,
  isOpen: false,
  disableFooterButton: false,
  footerButtonText: 'Continue',
  hasCancelButton: true,
  hasCheckbox: false,
  hasFooter: true,
  onCancelClick: null,
  onClick: null,
  onClose: null,
  subTitle: '',
  type: OVERLAY,
  useAltTheme: false,
};
