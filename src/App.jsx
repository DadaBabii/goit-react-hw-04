import { useState } from "react";
import { useEffect } from "react";

// import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { requestPhotosByQuery } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestPhotosByQuery(query, page);
        console.log(data.results);
        setImages(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const onSearchImages = (inputValue) => {
    setQuery(inputValue);
    console.log(query);
  };

  return (
    <>
      <SearchBar onSearch={onSearchImages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
    </>
  );
}

export default App;
