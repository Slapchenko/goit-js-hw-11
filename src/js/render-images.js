import getRefs from './get-refs';
import simpleLightbox from 'simplelightbox';

const refs = getRefs();
let lightbox = new simpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images) {
  const markup = images.data.hits
    .map(image => {
      return `<div class="photo-card">
      <a href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes: ${new Intl.NumberFormat('en-En').format(image.likes)}</b>
        </p>
        <p class="info-item">
          <b>Views: ${new Intl.NumberFormat('en-En').format(image.views)}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${new Intl.NumberFormat('en-En').format(
            image.comments
          )}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${new Intl.NumberFormat('en-En').format(
            image.downloads
          )}</b>
        </p>
      </div>
    </div>`;
    })
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
