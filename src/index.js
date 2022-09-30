import ImgApiService from './js/img-servise';
import { renderImages } from './js/render-images';
import getRefs from './js/get-refs';

const refs = getRefs();
const imgApiService = new ImgApiService();

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchImages);

function onSearch(e) {
  e.preventDefault();

  imgApiService.query = refs.input.value.trim();
  imgApiService.resetPage();
  clearGallery();
  fetchImages();
}

function fetchImages() {
  imgApiService
    .fetchImages()
    .then(images => {
      if (images.data.hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      renderImages(images);
    })
    .catch(error => console.log(error));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
