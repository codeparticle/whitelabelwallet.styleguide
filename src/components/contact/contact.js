/**
 * @fileoverview Contact Component
 * @author Kevin Van Beek
 * @author Gabriel Womble
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Visible } from '@codeparticle/react-visible';
import {
  Button,
  IconButton,
  Tooltip,
  useMedia,
  useTheme,
} from 'src';
import styles from './contact.scss';
import { icons } from '../../svgs';

const { SvgContact, SvgCog, SvgEllipsis } = icons;

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

const ActionButtons = ({
  dataSelector,
  handleCopyClicked,
  isMobile,
  onEdit,
  onSend,
  translations,
  theme,
}) => (
  <>
    <Visible when={!isMobile}>
      <div className={styles.editIcon}>
        <IconButton
          dataSelector={`${dataSelector}-edit`}
          onClick={onEdit}
          icon={<SvgCog />}
          variant="slate"
        />
      </div>
    </Visible>
    <div className={styles.buttons}>
      <Visible when={isMobile}>
        <Button
          dataSelector={`${dataSelector}-edit`}
          variant={theme.editBtnType}
          onClick={onEdit}
        >
          {translations.edit}
        </Button>
      </Visible>
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
  </>
);

ActionButtons.propTypes = {
  dataSelector: PropTypes.string.isRequired,
  handleCopyClicked: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

const TooltipWrapper = ({ children }) => (
  <>
    <div
      className={styles.actions}
      data-event="click focus"
      data-for="contact-tooltip"
      data-tip="custom show"
    >
      <SvgEllipsis />
    </div>
    <Tooltip
      className={styles.tooltip}
      clickable
      globalEventOff="click"
      Id="contact-tooltip"
      content={children}
      offset={{ top: 40, left: 70 }}
      place="bottom"
    />
    <style jsx>
      {`
        :global(.__react_component_tooltip.type-dark.place-bottom::after) {
          border-color: transparent !important;
        }

        :global(.__react_component_tooltip.show) {
          opacity: 1;
        }
      `}
    </style>
  </>
);

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContactActions = ({
  address,
  dataSelector,
  onCopy,
  onEdit,
  onSend,
  translations,
  theme,
}) => {
  const { isMobile } = useMedia();
  const handleCopyClicked = () => {
    if (!onCopy) {
      copyToClipBoard(address);

      return;
    }

    onCopy();
  };

  const actionProps = {
    dataSelector,
    handleCopyClicked,
    isMobile,
    onEdit,
    onSend,
    translations,
    theme,
  };

  const ActionParent = isMobile
    ? TooltipWrapper
    : ({ children }) => <>{children}</>;

  return (
    <ActionParent>
      <ActionButtons {...actionProps} />
    </ActionParent>
  );
};

ContactActions.propTypes = {
  address: PropTypes.string.isRequired,
  dataSelector: PropTypes.string.isRequired,
  onCopy: PropTypes.func,
  onEdit: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};

ContactActions.defaultProps = {
  onCopy: null,
};

const ContactHeader = ({
  address,
  contactName,
  dataSelector,
}) => (
  <>
    <div className={styles.details}>
      <h2 data-selector={`${dataSelector}-name`}>
        {contactName}
      </h2>
      <h4 className={styles.address} data-selector={`${dataSelector}-address`}>
        {address}
      </h4>
    </div>
  </>
);

ContactHeader.propTypes = {
  address: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  dataSelector: PropTypes.string.isRequired,
};

const Contact = ({
  className,
  contactName,
  dataSelector = 'contact',
  address,
  onCopy,
  onEdit,
  onSend,
  translations,
  ...rest
}) => {
  const theme = useTheme('contact');

  const contactClass = classNames(
    styles.contact,
    className
  );

  return (
    <div
      {...rest}
      data-selector={dataSelector}
      className={contactClass}
    >
      <SvgContact className={styles.icon} fill={theme.icon} />
      <ContactHeader
        address={address}
        contactName={contactName}
        dataSelector={dataSelector}
      />
      <ContactActions
        theme={theme}
        address={address}
        dataSelector={dataSelector}
        onCopy={onCopy}
        onEdit={onEdit}
        onSend={onSend}
        translations={translations}
      />
      <style jsx>
        {`
          .${styles.contact} {
            background: ${theme.bg};
          }

          :global(.${styles.details}) {
            color: ${theme.details};
          }
  
          :global(.${styles.address}) {
            color: ${theme.address};
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
  onEdit: PropTypes.func,
  onSend: PropTypes.func,
  translations: PropTypes.shape({
    copy: PropTypes.string,
    send: PropTypes.string,
  }),
};

Contact.defaultProps = {
  className: '',
  contactName: '',
  dataSelector: 'contact',
  onCopy: null,
  onEdit: null,
  onSend: null,
  translations: {
    copy: 'Copy Address',
    edit: 'Edit Contact',
    send: 'Send Funds',
  },
};

export { Contact };
