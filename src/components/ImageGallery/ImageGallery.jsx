import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li onClick={onClick} key={image.id}>
              <ImageCard image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
