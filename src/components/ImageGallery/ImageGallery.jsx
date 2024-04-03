import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.container}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard onClick={onClick} image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
