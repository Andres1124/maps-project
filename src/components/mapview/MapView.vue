<script lang="ts" src="./MapView.ts">
</script>
<template>
    <div v-if="!isUserLocationReady" 
        class="loading-map text-white w-full h-full fixed top-0 left-0 z-[9999] flex justify-center items-center">
        <div class="text-center">
            <h3 class="font-bold text-xl">Espere por favor</h3>
            <span class="font-bold text-xl">Localizando...</span>
        </div>
    </div>
    <div v-show="isUserLocationReady" class="w-full h-full fixed" ref="mapElement">

    </div>
</template>
<style scoped>
.loading-map{
    background-color: rgba(0, 0, 0, 0.8);
}
</style>
