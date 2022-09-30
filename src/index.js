import { fetchImages } from './js/fetch-images';
import { renderImages } from './js/render-images';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  let searchQuery = refs.input.value.trim();

  fetchImages(searchQuery)
    .then(result => {
      if (result.data.hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      renderImages(result);
    })
    .catch(error => console.log(error));
}

function onLoadMore() {}
