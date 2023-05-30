<script src="./SearchResults.ts" lang="ts"></script>

<template>
    <div>
        <div v-if="isLoadingPlaces" class="text-center">
            <h5>Cargando</h5>
            <span>Espere por favor...</span>
        </div>
        <ul v-else-if="places.length > 0" class="mt-4">
            <li 
                v-for="place in places"
                :key="place.id"
                @click="onPlaceClicked(place)"
                :class="{'bg-sky-500 text-white': place.id === activePlace, 'hover:bg-gray-100': place.id !== activePlace}"
                class="cursor-pointer p-2 border-t  text-left">
                <h5 class="font-bold pb-4">{{ place.text }}</h5>
                <p>{{ place.place_name }}</p>
                <div class="mt-4">
                    <button 
                        @click.self="getRouteDirections(place)"
                        class="border px-4 py-2 rounded"
                        :class="place.id === activePlace ? 'hover:bg-white hover:text-black' : ''"
                        >Direcciones</button>
                </div>
            </li>
        </ul>
    </div>
</template>