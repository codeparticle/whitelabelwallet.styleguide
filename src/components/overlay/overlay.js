import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidepanel from '@codeparticle/react-sidenav';
import { Visible } from '@codeparticle/react-visible';
import { LabeledCheckbox } from 'components/labeled-checkbox';
import { Header } from 'components/header';
import { Button } from 'components/button';
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
  dataSelector,
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
  const theme = useTheme(OVERLAY);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0);
  const [width, setWidth] = useState(type === OVERLAY ? '100%' : `${calculateWidth(windowWidth)}px`);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disableFooterButton);
  const { color, shadow } = theme;

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
              dataSelector={`${dataSelector}-footer-cancel`}
              onClick={onCancelClick}
              className="footer-btn"
            >
              {cancelButtonText}
            </Button>
          </Visible>
          <Visible when={!hasCancelButton && hasCheckbox}>
            <LabeledCheckbox
              label={checkBoxLabel}
              checked={isChecked}
              onChange={handleCheck}
              color={color}
            />
          </Visible>

          <Button
            className={styles.footerBtn}
            disabled={isDisabled}
            dataSelector={`${dataSelector}-footer-btn`}
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
          dataSelector={`${dataSelector}-footer-btn`}
          onClick={onClick}
          disabled={isDisabled}
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
      >
        <div className={`content ${type}`} data-selector={`${dataSelector}`}>
          <div className={styles.header}>
            <Header
              dataSelector={`${dataSelector}-header`}
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
          :global(.react-sidenav-container) {
            box-shadow: ${shadow};
          }

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
            overflow: auto;
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
  dataSelector: PropTypes.string,
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
  dataSelector: '',
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
