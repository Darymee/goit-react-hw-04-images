import { Component } from 'react';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <>
        <GalleryItem>
          <GalleryImg
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            img={largeImageURL}
            alt={tags}
            onClose={() => this.toggleModal()}
          />
        )}
      </>
    );
  }
}
