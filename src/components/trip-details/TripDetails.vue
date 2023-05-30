<template>
    <div v-if="distance && duration" class="fixed p-6 bottom-[30px] right-[20px] rounded-lg bg-white shadow-container ">
        <div>
            Distancia: <strong> {{ distance }} kms</strong>
        </div>
        <div>
            Duración: <strong> {{ duration }} minutos</strong>
        </div>
    </div>
</template>
<script lang="ts">
import { useMapStore } from '@/composables';

export default {
    setup() {

        const { distance, duration } = useMapStore();


        return {
            distance,
            duration,
        }
    }
}
</script>
<style scoped>
.shadow-container {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, .2);
}
</style>
