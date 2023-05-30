import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYW5kcmVzMTEyNCIsImEiOiJjbGhzazJ1eG4wZnIxM2NsYjFhczR2bXRvIn0.f1d3EpbKgLb_9M4ZZoyoAw'
    }
});

export default directionsApi;
