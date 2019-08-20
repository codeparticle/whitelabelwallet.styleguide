/**
 * @fileoverview Modal Component
 * @author Gabriel Womble
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { Header } from 'components/header';
import { shade, white } from 'styles/colors.scss';

const { setAppElement } = ReactModal;

const defaultStyles = {
  background: white,
  borderRadius: '0px',
  bottom: '20%',
  overflow: 'auto',
  top: '25%',
  width: '500px',
};

function Modal({
  children,
  customStyles,
  Icon,
  onClose,
  overlayBackground,
  show,
  subTitle,
  title,
  useAltTheme,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(show);
  const modalStyles = {
    ...defaultStyles,
    ...customStyles,
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className="modal"
        overlayClassName="overlay"
        {...props}
      >
        <div className="modal-content">
          <Header
            onClose={onClose}
            subTitle={subTitle}
            title={title}
            useAltTheme={useAltTheme}
          />
          {children}
        </div>
      </ReactModal>
      <style jsx>
        {`
          .modal-content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 200px 1fr;
            height: 100%;
            width: 100%;
          }

          :global(.overlay) {
            background: ${overlayBackground};
            bottom: 0;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
          }

          :global(.modal) {
            -webkit-overflow-scrolling: touch;
            background: ${modalStyles.background};
            border-radius: ${modalStyles.borderRadius};
            bottom: ${modalStyles.bottom};
            left: calc(50vw - ${modalStyles.width} / 2);
            outline: none;
            overflow: ${modalStyles.overflow};
            position: absolute;
            right: calc(50vw - ${modalStyles.width} / 2);
            top: ${modalStyles.top};
          }
        `}
      </style>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  customStyles: PropTypes.shape({
    background: PropTypes.string,
    borderRadius: PropTypes.string,
    bottom: PropTypes.string,
    overflow: PropTypes.string,
    top: PropTypes.string,
    width: PropTypes.string,
  }),
  Icon: PropTypes.node,
  onClose: PropTypes.func,
  overlayBackground: PropTypes.string,
  show: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  useAltTheme: PropTypes.bool,
};

Modal.defaultProps = {
  customStyles: defaultStyles,
  Icon: null,
  onClose: null,
  overlayBackground: shade,
  show: false,
  subTitle: '',
  useAltTheme: false,
};

export {
  Modal,
  setAppElement,
};
