import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/searchhttps://api.unsplash.com/search/photos?client_id=tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U",
});

// "https://api.unsplash.com/search/photos?client_id=tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U&query=offic

export const requestPhotosByQuery = async (query = "") => {
  const { data } = await instance.get(`&q=${query}`);

  return data;
};