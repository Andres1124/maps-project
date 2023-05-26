import { computed, defineComponent, ref } from "vue";
import SearchResults from "@/components/searchresults/SearchResults.vue";

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup() {

        const debounceTimeOut =ref();
        const debouncedValue = ref('');        

        return {
            debouncedValue,

            searchTerm: computed({
                get() {
                    return debouncedValue.value
                },
                set(val: string) {

                    if (debounceTimeOut.value) clearTimeout(debounceTimeOut.value)

                    debounceTimeOut.value = setTimeout(() => {
                        debouncedValue.value = val
                    }, 500)

                }
            })

        }
    }
});
