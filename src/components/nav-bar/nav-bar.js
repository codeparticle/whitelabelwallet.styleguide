import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sidepanel from '@codeparticle/react-sidenav';
import { white } from 'styles/colors.scss';
import layout from 'styles/layout.scss';
import { Logo } from 'components/logo';
import { IconButton as IconWrapper, IconVariants } from 'components/icon-button';
import { icons } from 'svgs';
import styles from './nav-bar.scss';

const { SvgClose } = icons;

const LOGO_ICON_SIZE = 46;
const SIDE_PANEL_MIN_WIDTH = 230;
const SIDE_PANEL_MAX_WIDTH = 280;
const SIDE_PANEL_WIDTH_DIFFERENTIAL = SIDE_PANEL_MAX_WIDTH - SIDE_PANEL_MIN_WIDTH;

const widthBreakpointLg = parseInt(layout.widthBreakpointLg, 10);
const widthBreakpointMd = parseInt(layout.widthBreakpointMd, 10);
const widthBreakpointXS = parseInt(layout.widthBreakpointXS, 10);
const widthBreakpointXXS = parseInt(layout.widthBreakpointXXS, 10);

/**
 * This function does the same thing as `fluid-size` from mixins
 * @param {number} innerWidth - Inner width of the window
 * @returns {number} - calculated width
 */
function calculateWidth(innerWidth) {
  if (innerWidth >= widthBreakpointLg) {
    return SIDE_PANEL_MAX_WIDTH;
  }

  if (innerWidth <= widthBreakpointXS) {
    return innerWidth;
  }

  const deltaFromMinWidth = innerWidth - widthBreakpointXXS;
  const breakpointWidthDifferential = widthBreakpointLg - widthBreakpointXXS;
  const deltaWidth = (SIDE_PANEL_WIDTH_DIFFERENTIAL * deltaFromMinWidth) / breakpointWidthDifferential;

  return SIDE_PANEL_MIN_WIDTH + deltaWidth;
}

function handleSidePanelResize(innerWidth, setFn) {
  setFn(`${calculateWidth(innerWidth)}px`);
}

/**
  @typedef NavItemProps
  @type {Object}
  @param {string} label - label
  @param {string} icon - an icon source
  @param {string} alt - description for the icon
  @param {string} path - location
*/

/**
  Renders a nav item
  @param {NavItemProps} props - props for NavItem
  @param {number} key - index which becomes the key of the mapped nav item
  @param {Function} onClick - Callback for onNavItemClick
  @param {string} dataSelector - Optional e2e data-selector attr
  @returns {Node} - rendered NavItem
*/
const NavItem = ({
  label,
  Icon,
  path,
}, key, onClick, dataSelector) => (
  <Link
    key={key}
    onClick={() => onClick(label, path)}
    to={path}
    className={styles.navItem}
  >
    <Icon
      fill={white}
      width={LOGO_ICON_SIZE}
      height={LOGO_ICON_SIZE}
      className={styles.icon}
    />
    <div className={styles.label} data-selector={`${dataSelector}-${path.replace('/', '')}`}>
      {label}
    </div>
  </Link>
);

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export function NavBar({
  dataSelector,
  isOpen,
  labelLink,
  labelPoweredBy,
  linkHref,
  navItems,
  onClose,
  onNavItemClick,
}) {
  const [width, setWidth] = useState(isOpen ? calculateWidth(window.innerWidth) : '0px');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth || 0);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    handleSidePanelResize(windowWidth, setWidth);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Effect only runs twice: mount & unmount

  return (
    <Sidepanel
      className={styles.wrapper}
      fixed={windowWidth <= widthBreakpointXS}
      isOpen={isOpen || windowWidth > widthBreakpointMd}
      width={width.toString()}
    >
      <nav className={styles.component} data-selector={dataSelector}>
        <IconWrapper
          className={styles.closeButton}
          icon={<SvgClose />}
          onClick={onClose}
          variant={IconVariants.TERTIARY}
        />
        <div>
          <Link
            to="/"
            className={styles.logo}
            onClick={() => onNavItemClick('', '/')}
          >
            <Logo />
          </Link>
          <div>
            {navItems.map((navItem, index) => NavItem(navItem, index, onNavItemClick, dataSelector))}
          </div>
        </div>
        <div className={styles.footer}>
          <p>{labelPoweredBy}</p>
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {labelLink}&trade;
          </a>
        </div>
      </nav>
    </Sidepanel>
  );
}

NavBar.propTypes = {
  dataSelector: PropTypes.string,
  isOpen: PropTypes.bool,
  labelLink: PropTypes.string,
  labelPoweredBy: PropTypes.string,
  linkHref: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    path: PropTypes.string.isRequired,
  })),
  onClose: PropTypes.func,
  onNavItemClick: PropTypes.func,
};

NavBar.defaultProps = {
  dataSelector: '',
  isOpen: false,
  labelLink: 'Crypto Particle',
  labelPoweredBy: 'Powered by',
  linkHref: 'https://www.cryptoparticle.io/',
  navItems: [],
  onClose: null,
  onNavItemClick: () => null,
};
