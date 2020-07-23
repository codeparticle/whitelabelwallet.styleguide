/* 
 *  This is the default license template.
 *  
 *  File: qr-code.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview QRCode Component
 * @author Kevin Van Beek
 */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QRCodeGenerator from 'qrcode';
import { useMedia, useTheme } from 'src';
import styles from './qr-code.scss';

const QRCodeImage = ({ qrcode }) => {
  if (!qrcode) {
    return null;
  }

  return (
    <div className={styles['qr-code__image']}>
      <div className={styles['qr-code__image-bottom']} dangerouslySetInnerHTML={{ __html: qrcode }} />
    </div>
  );
};

const QRCode = ({
  className,
  dataSelector,
  title,
  qrString,
  translations,
  ...rest
}) => {
  const [qrcode, setCode] = useState('');
  const { isMobile } = useMedia();

  useEffect(() => {
    QRCodeGenerator.toString(qrString, (err, svgString) => {
      setCode(svgString);
    });
  }, [qrString]);

  const theme = useTheme('qrcode');

  const qrCodeClass = classNames(
    styles['qr-code'],
    className
  );

  if (isMobile) {
    return (
      <div data-selector={dataSelector} className={qrCodeClass}>
        <div className={styles['qr-code__message']}>
          <p>{translations.scan}</p>
        </div>
        <div className={styles['qr-code__container']}>
          <QRCodeImage qrcode={qrcode} />
        </div>
        <div className={styles['qr-code__wallet']}>
          <h2>{translations.walletName}</h2>
          <p>{translations.addressName}</p>
        </div>
        <style jsx>
          {`
            .${styles['qr-code']} {
              background: ${theme.bgMobile};
              color: ${theme.textTitle};
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div
      {...rest}
      data-selector={dataSelector}
      className={qrCodeClass}
    >
      <div
        className={styles['qr-code__container']}
      >
        <h2>{title}</h2>
        <QRCodeImage qrcode={qrcode} />
        <div className={styles['qr-code__request']}>
          <div className={styles['qr-code__amount']}>{translations.amount}</div>
          <div>{translations.addressName}</div>
        </div>
      </div>
      <div
        className={styles['qr-code__message']}
      >
        {translations.scan}
      </div>
      <style jsx>
        {`
          .${styles['qr-code']} {
            background: ${theme.bg};
            color: ${theme.textTitle};
          }

          .${styles['qr-code__message']} {
            background: ${theme.messageBg};
          }

          .${styles['qr-code__request']} {
            color: ${theme.request};
          }
        `}
      </style>
    </div>
  );
};

QRCode.propTypes = {
  qrString: PropTypes.string,
  className: PropTypes.string,
  dataSelector: PropTypes.string,
  translations: PropTypes.shape({
    amount: PropTypes.string,
    addressName: PropTypes.string,
    scan: PropTypes.string,
    walletName: PropTypes.string,
  }),
  title: PropTypes.string,
};

QRCode.defaultProps = {
  qrString: '',
  className: '',
  dataSelector: '',
  translations: {
    amount: '',
    addressName: '',
    scan: '',
    walletName: '',
  },
  title: '',
};

export { QRCode };
