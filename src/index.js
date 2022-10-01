import ImgApiService from './js/img-servise';
import LoadMoreBtn from './js/load-more-btn';
import { renderImages } from './js/render-images';
import getRefs from './js/get-refs';
import Notiflix from 'notiflix';

const refs = getRefs();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const imgApiService = new ImgApiService();

refs.form.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

async function onSearch(e) {
  e.preventDefault();

  imgApiService.query = refs.input.value.trim();

  imgApiService.resetPage();
  clearGallery();
  fetchImages();
  loadMoreBtn.show();
}

function fetchImages() {
  imgApiService
    .fetchImages()
    .then(images => {
      console.log(`Приехало картинок:`, images.data.hits.length);
      if (images.data.hits.length === 0) {
        loadMoreBtn.hide();
        return Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      if (images.data.hits.length < 40) {
        console.log(`последний запрос`);
        loadMoreBtn.hide();
      }

      renderImages(images);
    })
    .catch(error => console.log(error));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

//   console.log(images.data.hits.length);
//   if (images.data.hits.length < 200 && images.data.hits.length > 0) {
//     loadMoreBtn.hide();
//     return Notiflix.Notify.info(
//       `We're sorry, but you've reached the end of search results.`
//     );
//   }
