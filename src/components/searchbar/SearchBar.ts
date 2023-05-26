import { computed, defineComponent, ref, watch } from "vue";
import SearchResults from "@/components/searchresults/SearchResults.vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup() {

        const debounceTimeOut =ref();
        const debouncedValue = ref('');
        const { searchPlacesByTerm } = usePlacesStore();  
        
        watch(debouncedValue, (value) => {
            if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

            debounceTimeOut.value = setTimeout(() => {
                searchPlacesByTerm(value);
            }, 500);
        })

        return {
            debouncedValue,

        }
    }
});
