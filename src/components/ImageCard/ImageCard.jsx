const ImageCard = ({ image }) => {
  // console.log(image.id);
  return (
    <div>
      <img id={image.id} src={image.urls.small} alt="image" />
    </div>
  );
};

export default ImageCard;
