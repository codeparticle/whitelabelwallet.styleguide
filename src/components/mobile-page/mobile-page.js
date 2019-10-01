/**
 * @fileoverview Common page pattern for WLW mobile
 * @author Gabriel Womble
 */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Visible } from '@codeparticle/react-visible';
import { CircularAddButton } from 'components/circular-add-button';
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
  onAddClicked,
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
        <Visible when={Boolean(onAddClicked)}>
          <CircularAddButton onClick={onAddClicked} />
        </Visible>
        {children}
      </section>
    </div>
  );
}

MobilePage.propTypes = {
  children: PropTypes.node.isRequired,
  dataSelector: PropTypes.string,
  NavigationButton: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  PrimaryAction: PropTypes.func.isRequired,
  onAddClicked: PropTypes.func,
};

MobilePage.defaultProps = {
  dataSelector: 'mobile-page',
  onAddClicked: null,
};

export { MobilePage };
