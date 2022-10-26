import PropTypes from 'prop-types';

import { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.OnEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.OnEscClick);
  }

  OnEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { img, alt } = this.props;
    return (
      <Backdrop onClick={this.onBackdropClick}>
        <ModalWindow>
          <img src={img} alt={alt} />
        </ModalWindow>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
