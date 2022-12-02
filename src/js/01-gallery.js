// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const gallery = document.querySelector("div.gallery");

const createGallery = (array) => {
  const createGalleryItem = array
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");

  return (gallery.innerHTML = createGalleryItem);
};

createGallery(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const carousel = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
