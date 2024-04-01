import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Please enter something!");

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchInput = evt.target.elements.searchvalue.value.trim();
    if (evt.target.elements.searchvalue.value.trim() === "") {
      notify();
      console.log("nothing");

      return;
    }
    onSearch(searchInput);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchvalue"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              backgroundColor: "tomato",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
