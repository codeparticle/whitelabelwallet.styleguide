/**
 * @fileoverview Page footer pattern for use in WLW
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Visible } from '@codeparticle/react-visible';
import { useTheme } from '../theme-provider';

import styles from './page-footer.scss';

const THEME_KEY = 'pageFooter';

const renderProp = Prop => (typeof Prop === 'function' ? <Prop /> : Prop);

function PageFooter({
  alert,
  dataSelector,
  message,
  button,
}) {
  const { background, color } = useTheme(THEME_KEY);
  function renderMessage(Message) {
    const messageDataSelector = `${dataSelector}-message`;

    if (typeof Message === 'string') {
      return (
        <h4 className={styles.footer.text} dataSelector={messageDataSelector}>
          {Message}
        </h4>
      );
    }

    return (
      <>
        {renderProp(Message)}
      </>
    );
  }

  return (
    <>
      <div className={styles.footer} data-selector={dataSelector}>
        {renderMessage(message)}
        <Visible when={alert}>
          <div className={styles.alert} data-selector={`${dataSelector}-alert`}>
            {renderProp(alert)}
          </div>
        </Visible>
        <div className={styles.footer.btn} data-selector={`${dataSelector}-btn`}>
          {renderProp(button)}
        </div>
      </div>
      <style jsx>
        {`
          .${styles.footer} {
            background: ${background};
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

PageFooter.propTypes = {
  dataSelector: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
  alert: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  button: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
};

PageFooter.defaultProps = {
  alert: null,
  button: null,
  dataSelector: 'page-footer',
  message: '',
};

export { PageFooter };
