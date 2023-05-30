import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 4,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYW5kcmVzMTEyNCIsImEiOiJjbGhzazJ1eG4wZnIxM2NsYjFhczR2bXRvIn0.f1d3EpbKgLb_9M4ZZoyoAw'
    }
});

export default searchApi;
