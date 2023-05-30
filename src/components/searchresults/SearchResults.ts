import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()
        const { map, setPlacesMarkers } = useMapStore();
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
                activePlace.value = place.id;
                const [lng, lat] = place.center;
                
                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat],
                })
            }
        }
    }
});
