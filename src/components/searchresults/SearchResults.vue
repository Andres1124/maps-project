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
                class="cursor-pointer p-2 border-t hover:bg-gray-100 text-left">
                <h5 class="font-bold pb-4">{{ place.text }}</h5>
                <p>{{ place.place_name }}</p>
                <div class="mt-4">
                    <button class="border px-4 py-2 rounded">Direcciones</button>
                </div>
            </li>
        </ul>
    </div>
</template>