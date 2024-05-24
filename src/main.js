import { removeLoader, createLoader, galleryRender, createLeanMore, removeLeanMore } from "./js/render-functions";
import { request } from "./js/pixabay-api";

export const gallery = document.querySelector('.gallery');
export const searchBar = document.querySelector('.search-bar');
export const searchInput = document.querySelector('.search-bar input');

let pageNumber = 1;
let searchValue = "";

searchBar.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('11')
    if (searchInput.value == '' || searchInput.value == ' ') {
        return;
    }
    createLoader();
    searchValue = searchInput.value;
    pageNumber = 1;

    const photos = await request(searchValue, pageNumber)
        .then(response => { return response.data })
        .catch(error => console.log(error));
    
    pageNumber += 1;
    
    galleryRender(photos);
    removeLoader();
    createLeanMore(leanMoreClick);

    e.target.reset();
});

async function leanMoreClick() {
    createLoader();
    removeLeanMore();

    const photos = await request(searchValue, pageNumber)
        .then(response => { return response.data })
        .catch(error => console.log(error));
    
    pageNumber += 1;
    
    galleryRender(photos);
    removeLoader();
    createLeanMore(leanMoreClick);
}