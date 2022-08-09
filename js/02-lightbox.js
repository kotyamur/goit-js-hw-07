import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createPhotoGallary = photos => {
  return photos
    .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}"
                />
            </a>
        `;
    })
    .join('');
};

const galleryMarkup = createPhotoGallary(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: "alt",
});
