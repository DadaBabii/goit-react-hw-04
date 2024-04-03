import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.container}>
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
