import { useState } from "react";
import { useEffect } from "react";

// import "./App.css";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { requestPhotosByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalpages, setTtotalpages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestPhotosByQuery(query, page);

        setTtotalpages(data.total_pages);

        setImages((previmage) => [...previmage, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleMoreImages = () => {
    setPage((page) => page + 1);
  };
  const onSearchImages = (inputValue) => {
    setImages([]);
    setQuery(inputValue);
  };

  const onClickImage = (e) => {
    console.log(e.target.id, images);

    const find = images.filter((image) => image.id === e.target.id);
    setModalImage(find);

    openModal();
  };

  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={onSearchImages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images && <ImageGallery images={images} onClick={onClickImage} />}
      {modalIsOpen && (
        <ImageModal
          modalImage={modalImage}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      {page < totalpages && <LoadMoreBtn onClick={handleMoreImages} />}
    </>
  );
}

export default App;
