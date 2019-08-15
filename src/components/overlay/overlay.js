import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidepanel from '@codeparticle/react-sidenav';
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
  onClose,
  show,
  type,
}) {
  const theme = useTheme('overlay');
  const [width, setWidth] = useState('0px');
  const [windowWidth, setWindowWidth] = useState(window.innerHeight || 0);

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
    <Sidepanel
      fixed
      right
      backgroundColor={background || theme[type]}
      isOpen={show}
      onStateChange={onClose}
      width={width}
    >
      {children}
    </Sidepanel>
  );
}

Overlay.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  type: PropTypes.oneOf([
    OVERLAY,
    SIDEPANEL,
  ]),
};

Overlay.defaultProps = {
  background: '',
  onClose: null,
  show: false,
  type: OVERLAY,
};
