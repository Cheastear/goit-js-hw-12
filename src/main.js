import { hideLoader, unhideLoader, galleryRender, unhideLeanMore, hideLeanMore, clear } from "./js/render-functions";
import { request } from "./js/pixabay-api";
import iziToast from "izitoast";

export const gallery = document.querySelector('.gallery');
export const searchBar = document.querySelector('.search-bar');
export const searchInput = document.querySelector('.search-bar input');
export const loader = document.querySelector('.loader');
export const leanMoreButton = document.querySelector('.leanMore');

export const countHits = 15;

let countPages = 0;
let pageNumber = 1;
let searchValue = "";

searchBar.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (searchInput.value == '' || searchInput.value == ' ') {
        return;
    }
    clear();
    unhideLoader();
    searchValue = searchInput.value;
    pageNumber = 1;

    const photos = await request(searchValue, pageNumber, countHits)
        .then(response => { return response.data })
        .catch(error => console.log(error));
    
    pageNumber += 1;
    
    if (photos.hits.length == 0) {
        iziToast.error({
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!"
        });
        hideLoader();
        e.target.reset();
        return;
    }


    galleryRender(photos);

    

    hideLoader();

    countPages = Math.ceil(photos.totalHits / countHits);

    if (countPages < pageNumber) {
        iziToast.info({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results.",
        });
        hideLeanMore();
    }
    else {
        unhideLeanMore();
    }

    e.target.reset();
});

leanMoreButton.addEventListener('click', async e => {
    unhideLoader();
    hideLeanMore();

    const photos = await request(searchValue, pageNumber, countHits)
        .then(response => { return response.data })
        .catch(error => console.log(error));
    
    pageNumber += 1;
    
    const galleryCardHeight = document.querySelector('.gallery-card').getBoundingClientRect().height;

    galleryRender(photos);

    window.scrollBy({
        top: galleryCardHeight * 2,
        behavior: 'smooth'
    });

    hideLoader();
    if (countPages < pageNumber) {
        iziToast.info({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results.",
        });
        hideLeanMore();
    }
    else {
        unhideLeanMore();
    }
});