import { searchInput } from "../main";
import { galleryRender} from "./render-functions";

export function request() {
    const params = new URLSearchParams({
        key: '44001471-3db462177f0e91bc0a7989cfe',
        q: searchInput.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'safe'
    });

    fetch(`https://pixabay.com/api/?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((photos) => {
            galleryRender(photos);
        })
        .catch((error) => {
            console.log(error);
        });
}