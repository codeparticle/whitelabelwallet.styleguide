import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sidepanel from '@codeparticle/react-sidenav';
import { Header } from 'components/header';
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
  show,
  subTitle,
  title,
  type,
  useAltTheme,
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
    <>
      <Sidepanel
        fixed
        right
        backgroundColor={background || theme[type]}
        isOpen={show}
        onStateChange={onClose}
        width={width}
      >
        <div className={`content ${type}`}>
          <Header
            Icon={Icon}
            minimalStyle={type === OVERLAY}
            onClose={onClose}
            subTitle={subTitle}
            title={title}
            useAltTheme={useAltTheme}
          />
          {children}
        </div>
      </Sidepanel>
      <style jsx>
        {`
          .content {
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
            overflow: auto;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}

Overlay.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  Icon: PropTypes.node,
  onClose: PropTypes.func,
  show: PropTypes.bool,
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
  onClose: null,
  show: false,
  subTitle: '',
  type: OVERLAY,
  useAltTheme: false,
};
