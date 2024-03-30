import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { requestPhotosByQuery } from "./services/api";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(false);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos?client_id=tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U&query=offic"
        );

        console.log(response.data.results);
        setImages(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <>
      <SearchBar />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
    </>
  );
}

export default App;
