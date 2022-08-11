import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createPhotoGallary = photos => {
  return photos
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
        `;
    })
    .join('');
};

const galleryMarkup = createPhotoGallary(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscapeClick);
  },
  onClose: instance => {
    window.removeEventListener('keydown', onEscapeClick);
  },
});

const onEscapeClick = event => {
  if (event.code === 'Escape') {
    instance.close();
  }
};

const ongalleryContainerClick = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
};

galleryContainer.addEventListener('click', ongalleryContainerClick);
