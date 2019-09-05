/**
 * @fileoverview A reusable Header pattern
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { themes, useTheme } from 'components/theme-provider';
import { useMedia } from 'hooks/use-media';
import styles from './page-header.scss';

const THEME_KEY = 'pageHeader';
const ICON_SIZE = 24;
const iconProps = {
  height: ICON_SIZE,
  width: ICON_SIZE,
};

/**
 * Function that wraps a component inside a div w/ margin
 * @returns {Node} - PageItem
 * @param {Node} className - additional className for styling
 * @param {Node} Component - Component to render
 * @param {Node} collapsed - true if view is collapsed
 */
function PageItem({
  className,
  Component,
  collapsed,
  dataSelector,
}) {
  if (!Component) {
    return null;
  }

  return (
    <div className={classNames(styles.pageItem, styles[className])} data-selector={`${dataSelector}-item`}>
      <Component collapsed={collapsed} iconProps={iconProps} />
    </div>
  );
}

PageItem.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  Component: PropTypes.func,
  dataSelector: PropTypes.string,
};

PageItem.defaultProps = {
  className: '',
  collapsed: false,
  Component: null,
  dataSelector: '',
};

/**
 * A function that maps an array of icons to PageItems
 * @returns {Node} - returns the icons rendered by PageItems
 * @param {Array} Icons - an array of icons to be rendered
 */
function PageIcons({ Icons, dataSelector }) {
  if (!Icons) {
    return null;
  }

  return (
    <>
      {Icons.map((Icon, index) => (
        <PageItem key={`icon-${index}`} Component={Icon} dataSelector={dataSelector} />
      ))}
    </>
  );
}

PageIcons.propTypes = {
  dataSelector: PropTypes.string,
  Icons: PropTypes.arrayOf(PropTypes.func),
};

PageIcons.defaultProps = {
  dataSelector: '',
  Icons: null,
};

/**
 * @returns {Node} PageHeader
 * @param {Array} IconButtons - an array of icons to be rendered
 * @param {Node} NavigationButton - a button that will trigger a navigation event
 * @param {Node} PrimaryButton - a component that represents a primary action
 * @param {Node} SecondaryAction - a component that represents a secondary action
 * @param {string} title - title text
 */
function PageHeader({
  dataSelector,
  IconButtons,
  NavigationButton,
  PrimaryAction,
  SecondaryAction,
  title,
  useAltTheme,
}) {
  const { color } = useAltTheme
    ? themes.alt[THEME_KEY]
    : useTheme(THEME_KEY);
  const media = useMedia();
  const { isMobile, isLandScape } = media;
  const collapsed = (isMobile || isLandScape);
  const Title = () => <h2>{title}</h2>;

  return (
    <>
      <div
        className={classNames(
          styles.pageHeader,
          useAltTheme && styles.altTheme
        )}
        data-selector={dataSelector}
      >
        <div className={styles.pageHeader__title}>
          <PageItem
            className="nav"
            Component={NavigationButton}
            collapsed={collapsed}
            dataSelector={dataSelector}
          />
          <PageItem className="title" Component={Title} collapsed={collapsed} />
          <PageItem
            className="primary"
            Component={PrimaryAction}
            collapsed={collapsed}
            dataSelector={dataSelector}
          />
        </div>
        {!collapsed && (
          <div className={styles.pageHeader__buttons}>
            <PageItem Component={SecondaryAction} dataSelector={dataSelector} />
            <PageIcons Icons={IconButtons} dataSelector={dataSelector} />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .${styles.pageHeader} {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

PageHeader.propTypes = {
  dataSelector: PropTypes.string,
  IconButtons: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  NavigationButton: PropTypes.func,
  PrimaryAction: PropTypes.func,
  SecondaryAction: PropTypes.func,
  title: PropTypes.string.isRequired,
  useAltTheme: PropTypes.bool,
};

PageHeader.defaultProps = {
  dataSelector: '',
  IconButtons: null,
  NavigationButton: null,
  PrimaryAction: null,
  SecondaryAction: null,
  useAltTheme: false,
};

export { PageHeader };
