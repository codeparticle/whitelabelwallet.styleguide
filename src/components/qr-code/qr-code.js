/**
 * @fileoverview QRCode Component
 * @author Kevin Van Beek
 */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import QRCodeGenerator from 'qrcode';
import styles from './qr-code.scss';
import { useTheme } from '../theme-provider';

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
  title,
  address,
  messages,
  ...rest
}) => {
  const [qrcode, setCode] = useState('');

  useEffect(() => {
    QRCodeGenerator.toString(address, (err, svgString) => {
      setCode(svgString);
    });
  }, [address]);

  const theme = useTheme('qrcode');

  const qrCodeClass = classNames(
    styles['qr-code'],
    className
  );

  return (
    <div
      {...rest}
      className={qrCodeClass}
    >
      <div
        className={styles['qr-code__container']}
      >
        <h2>{title}</h2>
        <QRCodeImage qrcode={qrcode} />
        <div className={styles['qr-code__request']}>
          <div className={styles['qr-code__amount']}>{messages.amount}</div>
          <div>{messages.addressName}</div>
        </div>
      </div>
      <div
        className={styles['qr-code__message']}
      >
        {messages.scan}
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
  address: PropTypes.string,
  className: PropTypes.string,
  messages: PropTypes.shape({
    amount: PropTypes.string,
    addressName: PropTypes.string,
    scan: PropTypes.string,
  }),
  title: PropTypes.string,
};

QRCode.defaultProps = {
  address: '',
  className: '',
  messages: {
    amount: '',
    addressName: '',
    scan: '',
  },
  title: '',
};

export { QRCode };
