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

const ongalleryContainerClick = evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const realPicture = evt.target.dataset.source;
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${realPicture}" />
        </div>
    `);

    instance.show();
    
    const el = instance.element();
    el.addEventListener('click', () => {
        instance.close();
    });
    window.addEventListener('keydown', event => {
        event.preventDefault();
        if (event.code === 'Escape') {
            instance.close();
        }
    });
};

galleryContainer.addEventListener('click', ongalleryContainerClick);
