<template>
    <div>
        <button v-if="isButtonReady" @click="onMylocationClick" class="fixed top-[30px] right-[30px]">Ir a mi ubicación</button>
    </div>
</template>
<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { computed } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

         return {

            isButtonReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMylocationClick: () => {
                map.value?.flyTo({
                    center: userLocation.value!,
                    zoom: 14
                })
            }
         }
    },
});
</script>
