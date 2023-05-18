import { defineComponent, onMounted, ref, watch } from "vue";
import { usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";

export default defineComponent({
    name: 'MapView',
    setup(props) {
        
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error('Div element unexpected');
            if (!userLocation.value) throw new Error('user location unexpected');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopUp = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Aquí estoy</h4>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map)

        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap();
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap();
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }


});
