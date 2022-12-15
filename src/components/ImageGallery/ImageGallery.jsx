import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem onClick={onClick} image={image} key={image.id} />
      ))}
    </ImageGalleryList>
  );
};
