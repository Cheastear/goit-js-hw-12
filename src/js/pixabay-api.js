import axios from "axios";

export async function request(searchValue, pageNum) {
    return await axios.get(`https://pixabay.com/api/`, {
        params: {
            per_page: 15,
            page: pageNum,
            key: '44001471-3db462177f0e91bc0a7989cfe',
            q: searchValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'safe'
        }
    });
}