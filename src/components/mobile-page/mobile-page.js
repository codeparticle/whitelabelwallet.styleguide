/* 
 *  This is the default license template.
 *  
 *  File: mobile-page.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Common page pattern for WLW mobile
 * @author Gabriel Womble
 */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useOffsetTrigger } from './use-offset-trigger';
import styles from './mobile-page.scss';

const ICON_SIZE = 24;
const iconProps = {
  height: ICON_SIZE,
  width: ICON_SIZE,
};

function getClassModifier(initialized, transition) {
  if (!initialized) {
    return 'initial';
  }

  return transition ? 'start-transition' : 'reset-transition';
}

function MobilePage({
  children,
  dataSelector,
  NavigationButton,
  title,
  Icon,
  PrimaryAction,
}) {
  const [initialized, setInitialized] = useState(false);
  const [transition, setTransition] = useState(false);
  const classModifier = getClassModifier(initialized, transition);
  const shouldTransition = useOffsetTrigger(`.${styles.headerContainer}`, -40);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [setInitialized]);

  useEffect(() => {
    setTransition(shouldTransition);
  }, [shouldTransition]);

  return (
    <div className={styles.page}>
      <header
        className={classNames(
          styles.headerContainer,
          styles[classModifier]
        )}
        data-selector={`${dataSelector}-header`}
      >
        <div className={styles.headerScrollContainer}>
          <NavigationButton iconProps={iconProps} dataSelector={`${dataSelector}-nav`} />
          <h1>{title}</h1>
          <PrimaryAction collapsed iconProps={iconProps} dataSelector={`${dataSelector}-primary`} />
        </div>
        <div className={styles.headerGradientContainer}>
          <Icon height={84} width={84} />
          <h1>{title}</h1>
        </div>
      </header>
      <section className={classNames(styles.pageContent)} data-selector={`${dataSelector}-content`}>
        {children}
      </section>
    </div>
  );
}

MobilePage.propTypes = {
  children: PropTypes.node.isRequired,
  dataSelector: PropTypes.string,
  NavigationButton: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  PrimaryAction: PropTypes.func.isRequired,
};

MobilePage.defaultProps = {
  dataSelector: 'mobile-page',
};

export { MobilePage };
