import Modal from "react-modal";

// Modal.setAppElement("#root");

const ImageModal = ({ isOpen, modalImage, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(117, 109, 109, 0.7)",
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        {modalImage.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.urls.regular} alt="image" />
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default ImageModal;

{
  /* <ImageCard image={image} onClick={openModal} />; */
}
// isOpen = { modalIsOpen };
