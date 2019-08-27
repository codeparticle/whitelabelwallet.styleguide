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
  theme,
  address,
  onCopy,
  onEdit,
  onSend,
  messages,
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
      <IconButton onClick={onEdit} icon={<SvgCog />} variant="slate" />
      <div
        className={classNames(
          styles['contact__buttons']
        )}
      >
        <Button
          variant={theme.copyBtnType}
          onClick={handleCopyClicked}
        >
          {messages.copy}
        </Button>
        <Button
          variant={theme.sendBtnType}
          onClick={onSend}
        >
          {messages.send}
        </Button>
      </div>
    </div>
  );
};

const ContactDetails = ({
  theme,
  contactName,
  address,
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
      <h2>
        {contactName}
      </h2>
      <h4
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
  address,
  onCopy,
  onSend,
  messages,
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
      className={contactClass}
    >
      <div
        className={classNames(
          styles['contact__content']
        )}
      >
        <ContactDetails
          theme={theme}
          contactName={contactName}
          address={address}
        />
        <ContactActions
          theme={theme}
          address={address}
          onCopy={onCopy}
          onSend={onSend}
          messages={messages}
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
  onCopy: PropTypes.func,
  onSend: PropTypes.func,
  messages: PropTypes.shape({
    copy: PropTypes.string,
    send: PropTypes.string,
  }),
};

Contact.defaultProps = {
  className: '',
  contactName: '',
  onCopy: null,
  onSend: null,
  messages: {
    copy: 'Copy Address',
    send: 'Send Funds',
  },
};

export { Contact };
