import { useState } from 'react';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const { webformatURL, largeImageURL, tags } = image;

  return (
    <>
      <GalleryItem>
        <GalleryImg src={webformatURL} alt={tags} onClick={toggleModal} />
      </GalleryItem>
      {showModal && (
        <Modal img={largeImageURL} alt={tags} onClose={() => toggleModal()} />
      )}
    </>
  );
}
