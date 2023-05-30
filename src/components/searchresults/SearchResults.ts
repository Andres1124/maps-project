import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()
        const { map } = useMapStore();
        const activePlace = ref('');

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
