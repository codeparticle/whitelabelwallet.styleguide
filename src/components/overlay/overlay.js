import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidepanel from '@codeparticle/react-sidenav';
import { Header } from 'components/header';
import { white } from 'styles/colors.scss';
import { useTheme } from '../theme-provider';
import { TYPES } from './constants';

const {
  OVERLAY,
  SIDEPANEL,
} = TYPES;

const sidePanelMinWidth = 540;

function handleSidePanelResize(innerWidth, setFn) {
  const optimalWidth = innerWidth / 3;
  const calculatedWidth = sidePanelMinWidth >= optimalWidth
    ? sidePanelMinWidth
    : optimalWidth;

  setFn(`${calculatedWidth}px`);
}

export function Overlay({
  background,
  children,
  Icon,
  onClose,
  isOpen,
  subTitle,
  title,
  type,
  useAltTheme,
}) {
  const theme = useTheme('overlay');
  const [width, setWidth] = useState('0px');
  const [windowWidth, setWindowWidth] = useState(window.innerHeight || 0);
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
        <div className={`content ${type}`}>
          <Header
            Icon={Icon}
            hideBackground={type === OVERLAY}
            onClose={onClose}
            subTitle={type === OVERLAY ? null : subTitle}
            title={title}
            useAltTheme={useAltTheme}
          />
          <div>
            {children}
          </div>
        </div>
      </Sidepanel>
      <style jsx>
        {`
          .content {
            color: ${color};
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
            overflow: auto;
            width: 100%;
          }

          .sidepanel {
            grid-template-rows: 336px 1fr;
          }
        `}
      </style>
    </>
  );
}

Overlay.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  Icon: PropTypes.func,
  isOpen: PropTypes.bool,
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
  Icon: null,
  isOpen: false,
  onClose: null,
  subTitle: '',
  type: OVERLAY,
  useAltTheme: false,
};
