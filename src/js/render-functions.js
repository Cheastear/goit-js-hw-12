import { gallery } from "../main"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function clear() {
    gallery.innerHTML = '';
}

export function createLoader() {
    gallery.innerHTML += '<span class="loader"></span>';
}

export function removeLoader() {
    document.querySelector('.loader').remove()
}

export function createLeanMore(onclick) {
    gallery.innerHTML += '<button type="button" class="leanMore">Lean more</button>';
    document.querySelector('.leanMore').addEventListener('click', onclick)
}
export function removeLeanMore() {
    document.querySelector('.leanMore').remove();
}

export function galleryRender(photos) {
    let innerHTML = '';
    if (photos.hits.length == 0) {
        iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!"
        });
    }
    else {
        photos.hits.forEach(elem => {
            innerHTML +=
                `<div class="gallery-card">
                <a href="${elem.largeImageURL}"><img src="${elem.webformatURL}" width="360px" alt="${elem.tags}"></a>
                <ul class="card-list">
                    <li><p>Likes:</p><p>${elem.likes}</p></li>
                    <li><p>Views:</p><p>${elem.views}</p></li>
                    <li><p>Comments:</p><p>${elem.comments}</p></li>
                    <li><p>Downloads:</p><p>${elem.downloads}</p></li>
                </ul>
            </div>`;
        });
    }
    gallery.innerHTML += innerHTML;
    new SimpleLightbox('.gallery-card a', {
        captionsData: 'alt',
        captionDelay: 250,
    }).refresh()
}