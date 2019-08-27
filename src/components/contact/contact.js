/**
 * @fileoverview Contact Component
 * @author Kevin Van Beek
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button, IconButton } from '../..';
import styles from './contact.scss';
import { useTheme } from '../theme-provider';
import { icons } from '../../svgs';

const { SvgContact, SvgCog } = icons;

const copyToClipBoard = (copy) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copy);
  } else {
    const input = document.createElement('input');
    input.value = copy;
    document.body.appendChild(input);
    input.focus();
    input.select();

    document.execCommand('copy');
    document.body.removeChild(input);
  }
};

const ContactActions = ({
  address,
  dataSelector,
  translations,
  onCopy,
  onEdit,
  onSend,
  theme,
}) => {
  const handleCopyClicked = () => {
    if (!onCopy) {
      copyToClipBoard(address);

      return;
    }

    onCopy();
  };

  return (
    <div
      className={classNames(
        styles['contact__actions']
      )}
    >
      <IconButton
        dataSelector={`${dataSelector}-edit`}
        onClick={onEdit}
        icon={<SvgCog />}
        variant="slate"
      />
      <div
        className={classNames(
          styles['contact__buttons']
        )}
      >
        <Button
          dataSelector={`${dataSelector}-copy`}
          variant={theme.copyBtnType}
          onClick={handleCopyClicked}
        >
          {translations.copy}
        </Button>
        <Button
          dataSelector={`${dataSelector}-send`}
          variant={theme.sendBtnType}
          onClick={onSend}
        >
          {translations.send}
        </Button>
      </div>
    </div>
  );
};

const ContactDetails = ({
  address,
  contactName,
  dataSelector,
  theme,
}) => (
  <div
    className={classNames(
      styles['contact__info']
    )}
  >
    <SvgContact fill={theme.icon} />
    <div
      className={classNames(
        styles['contact__details']
      )}
    >
      <h2 data-selector={`${dataSelector}-name`}>
        {contactName}
      </h2>
      <h4
        data-selector={`${dataSelector}-address`}
        className={classNames(
          styles['contact__address']
        )}
      >
        {address}
      </h4>
    </div>
    <style jsx>
      {`
        .${styles['contact__details']} {
          color: ${theme.details};
        }

        .${styles['contact__address']} {
          color: ${theme.address};
        }
      `}
    </style>
  </div>
);

const Contact = ({
  className,
  contactName,
  dataSelector,
  address,
  onCopy,
  onSend,
  translations,
  ...rest
}) => {
  const theme = useTheme('contact');

  const contactClass = classNames(
    styles.contact,
    'contact',
    className
  );

  return (
    <div
      {...rest}
      data-selector={dataSelector}
      className={contactClass}
    >
      <div
        className={classNames(
          styles['contact__content']
        )}
      >
        <ContactDetails
          dataSelector={dataSelector}
          theme={theme}
          contactName={contactName}
          address={address}
        />
        <ContactActions
          dataSelector={dataSelector}
          theme={theme}
          address={address}
          onCopy={onCopy}
          onSend={onSend}
          translations={translations}
        />
      </div>
      <style jsx>
        {`
          .contact {
            background: ${theme.bg};
          }
        `}
      </style>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  contactName: PropTypes.string,
  dataSelector: PropTypes.string,
  onCopy: PropTypes.func,
  onSend: PropTypes.func,
  translations: PropTypes.shape({
    copy: PropTypes.string,
    send: PropTypes.string,
  }),
};

Contact.defaultProps = {
  className: '',
  contactName: '',
  dataSelector: '',
  onCopy: null,
  onSend: null,
  translations: {
    copy: 'Copy Address',
    send: 'Send Funds',
  },
};

export { Contact };
