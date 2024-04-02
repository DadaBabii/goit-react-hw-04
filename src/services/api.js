import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com/search/photos",
//   KEY: 'tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U',
  

// });

// "https://api.unsplash.com/search/photos?client_id=tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U&query=offic

export const requestPhotosByQuery = async (query = "", page=1) => {
 
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const KEY = 'tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U';
  
  const options = {
        params: {
          client_id: KEY,
          query: `${query}`,
          per_page: 20,
          page: `${page}`,
   
    
  },
  };
  
  const { data } = await axios.get(BASE_URL, options);

  return data;
};

// async function getPhotoBySearch() {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const KEY = '42153847-0f7baac2d7b2e92d7ce6bbe8e';
    
   
//     const options = {
//         params: {
//     client_id: tEOYGyqRNrrpNcoRKp33yFBNWiliLSsoe9TBEqr2O5U,
//     query: `${query}`,
//     per_page: 15,
//     page: currentPage,
    
//   },
//     };
    
//     try {
//         const res = await axios.get(BASE_URL, options);
//         return res.data;
   
//     } catch (error) {
//         console.log('Результатів не знайдено.');
//     };
  
// };
