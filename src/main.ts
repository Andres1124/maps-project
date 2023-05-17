import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (!navigator.geolocation) {
    alert('Tu navegador no sopporta el geolocation');
    throw new Error('Tu navegador no sopporta el geolocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
