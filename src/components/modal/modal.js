/**
 * @fileoverview Modal Component
 * @author Gabriel Womble
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
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
  onClose,
  overlayBackground,
  show,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(show);
  const [initialized, setInitialized] = useState(false);
  const modalStyles = {
    ...defaultStyles,
    ...customStyles,
  };

  useEffect(() => {
    // Prevents onClose from being called on first render
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    setIsOpen(show);

    if (initialized && !show && onClose) {
      onClose();
    }
  }, [show]);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className="modal"
        overlayClassName="overlay"
        {...props}
      >
        {children}
      </ReactModal>
      <style jsx>
        {`
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
  onClose: PropTypes.func,
  overlayBackground: PropTypes.string,
  show: PropTypes.bool,
};

Modal.defaultProps = {
  customStyles: defaultStyles,
  onClose: null,
  overlayBackground: shade,
  show: false,
};

export {
  Modal,
  setAppElement,
};
