import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export default function Modal({ img, alt, onClose }) {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>
        <img src={img} alt={alt} />
      </ModalWindow>
    </Backdrop>
  );
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
