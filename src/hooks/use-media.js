/**
 * @fileoverview Hook to provide screen breakpoints in presentational files
 * @author Gabriel Womble
 */
import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { MediaContext } from 'components/media-provider';
import {
  widthBreakpointXL,
  widthBreakpointMd,
  widthBreakpointSm,
  widthBreakpointXS,
} from 'styles/layout.scss';

/*
  To use w/ provider:

  import { MediaProvider } from '@codeparticle/whitelabelwallet.styleguide';

  return (
    <MediaProvider>
      <App />
    </MediaProvider>
  );

  If you don't want to use the provider, pass false to useMedia:

  const media = useMedia(false);

  Usage examples:
    1: const media = useMedia();
    2: const { isMobile } = useMedia();
    3: const isTablet = useMedia().isTablet;
*/

/**
 @typedef media
 @type {Object}
 @property {boolean} media.isMobile
 @property {boolean} media.isTablet
 @property {boolean} media.isDesktop
 @property {boolean} media.isWideScreen
 */

/**
 * @returns {media} media
 * @param {boolean} withContext - Tells the hook to consume MediaContext
 * rather than add a new event listener. Defaults to true. If there is no Provider,
 * will add a new listener as a fallback.
 */
function useMedia(withContext = true) {
  if (withContext) {
    const media = useContext(MediaContext);

    if (media) {
      return media;
    }
  }
  const isClient = typeof window === 'object';

  function getSize() {
    return isClient ? window.innerWidth : undefined;
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  function applyBreakpoint(fromSize, toSize = null) {
    const minBreakpoint = parseInt(fromSize, 10) <= windowSize;
    const maxBreakpoint = toSize && parseInt(toSize, 10) > windowSize;

    const breakpointCondition = (
      (minBreakpoint && maxBreakpoint)
      || (minBreakpoint && !toSize)
    );

    return breakpointCondition;
  }

  const breakpoints = {
    isMobile: applyBreakpoint(0, widthBreakpointXS),
    isLandScape: applyBreakpoint(widthBreakpointXS, widthBreakpointSm),
    isTablet: applyBreakpoint(widthBreakpointSm, widthBreakpointMd),
    isDesktop: applyBreakpoint(widthBreakpointMd, widthBreakpointXL),
    isWideScreen: applyBreakpoint(widthBreakpointXL),
  };

  return useMemo(() => breakpoints, Object.values(breakpoints));
}

export { useMedia };
