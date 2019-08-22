/**
 * @fileoverview A reusable Header pattern
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from 'components/theme-provider';
import { useMedia } from 'hooks/use-media';
import styles from './page-header.scss';

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
}) {
  if (!Component) {
    return null;
  }

  return (
    <div className={classNames(styles.pageItem, styles[className])}>
      <Component collapsed={collapsed} iconProps={iconProps} />
    </div>
  );
}

PageItem.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  Component: PropTypes.func,
};

PageItem.defaultProps = {
  className: '',
  collapsed: false,
  Component: null,
};

/**
 * A function that maps an array of icons to PageItems
 * @returns {Node} - returns the icons rendered by PageItems
 * @param {Array} Icons - an array of icons to be rendered
 */
function PageIcons({ Icons }) {
  if (!Icons) {
    return null;
  }

  return (
    <>
      {Icons.map((Icon, index) => (
        <PageItem key={`icon-${index}`} Component={Icon} />
      ))}
    </>
  );
}

PageIcons.propTypes = {
  Icons: PropTypes.arrayOf(PropTypes.func),
};

PageIcons.defaultProps = {
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
  IconButtons,
  NavigationButton,
  PrimaryAction,
  SecondaryAction,
  title,
}) {
  const { color } = useTheme('pageHeader');
  const media = useMedia();
  const { isMobile, isLandScape } = media;
  const collapsed = (isMobile || isLandScape);
  const Title = () => <h2>{title}</h2>;

  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeader__title}>
          <PageItem className="nav" Component={NavigationButton} collapsed={collapsed} />
          <PageItem className="title" Component={Title} collapsed={collapsed} />
          <PageItem
            className="primary"
            Component={PrimaryAction}
            collapsed={collapsed}
          />
        </div>
        {!collapsed && (
          <div className={styles.pageHeader__buttons}>
            <PageItem Component={SecondaryAction} />
            <PageIcons Icons={IconButtons} />
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
  IconButtons: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  NavigationButton: PropTypes.func,
  PrimaryAction: PropTypes.func,
  SecondaryAction: PropTypes.func,
  title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  IconButtons: null,
  NavigationButton: null,
  PrimaryAction: null,
  SecondaryAction: null,
};

export { PageHeader };
