import { usePlacesStore } from "@/composables";
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {

        const { places, isLoadingPlaces } = usePlacesStore()

        return {
            isLoadingPlaces,
            places,
        }
    }
});
