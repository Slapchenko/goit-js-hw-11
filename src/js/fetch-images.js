const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22104578-b37830bb47769ec8fcc7503cc';
const axios = require('axios');

export async function fetchImages(name) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
    );

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
}
