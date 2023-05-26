<script src="./SearchBar.ts" lang="ts"></script>
<template>
    <div class="fixed top-[30px] left-[30px] z-[999] shadow rounded-lg bg-white w-[250px]">
        <input type="text" class="p-2 rounded-lg focus:outline-none" placeholder="Buscar lugares..." v-model="debouncedValue">
        <SearchResults />
    </div>
</template>
<style scoped>
.shadow{
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
}
</style>
