import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mapbox configuration
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzMTEyNCIsImEiOiJjbGhzazJ1eG4wZnIxM2NsYjFhczR2bXRvIn0.f1d3EpbKgLb_9M4ZZoyoAw';


if (!navigator.geolocation) {
    alert('Tu navegador no sopporta el geolocation');
    throw new Error('Tu navegador no sopporta el geolocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
