import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    setup() {

        const { places, isLoadingPlaces, userLocation } = usePlacesStore()
        const { map, setPlacesMarkers, getRouteBetweenPoints } = useMapStore();
        const activePlace = ref('');
        
        watch(places, (newPlaces) => {
            activePlace.value = '';
            setPlacesMarkers(newPlaces);
        });

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: (place: Feature) => {
                const [lng, lat] = place.center;
                activePlace.value = place.id;
                
                
                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat],
                })
            },
            
            getRouteDirections: (place: Feature) => {
                if (!userLocation.value) return;
                const [lng, lat] = place.center;

                const [startLng, startLat] = userLocation.value;

                const start: [number, number] = [startLng, startLat];
                const end: [number, number] = [lng, lat];

                getRouteBetweenPoints(start, end);

            }
        }
    }
});
