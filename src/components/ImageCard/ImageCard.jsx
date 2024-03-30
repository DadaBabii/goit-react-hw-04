const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt="image" />
    </div>
  );
};

export default ImageCard;
