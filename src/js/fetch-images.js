const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22104578-b37830bb47769ec8fcc7503cc';
const axios = require('axios');

export async function fetchImages(name) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
    );

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

// export function fetchImages(name) {
//   return fetch(
//     `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
