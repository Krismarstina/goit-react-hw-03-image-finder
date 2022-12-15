import { ImageItem, ImageItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
  onClick,
}) => {
  return (
    <ImageItem>
      <ImageItemImage
        src={webformatURL}
        alt={tags}
        data-large={largeImageURL}
        onClick={onClick}
      />
    </ImageItem>
  );
};
