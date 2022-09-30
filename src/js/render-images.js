import getRefs from './get-refs';

const refs = getRefs();

export function renderImages(images) {
  console.log(images.data.hits);

  const markup = images.data.hits
    .map(image => {
      return `<div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
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
  //   refs.gallery.innerHTML = markup;
}
