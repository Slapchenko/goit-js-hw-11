const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22104578-b37830bb47769ec8fcc7503cc';
const axios = require('axios');

export default class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
      );

      this.incrementPage();

      console.log(response);

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// fetchArticles() {
//   const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//   return fetch(url, options)
//     .then(response => response.json())
//     .then(({ articles }) => {
//       this.incrementPage();
//       return articles;
//     });
// }

// export async function fetchImages(name) {
//   try {
//     return response = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
//     );

//   } catch (error) {
//     console.error(error);
//   }
// }
