<template>
  <div class="home">
    <MapView />
    <SearchBar />
    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue'
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationBtn, SearchBar },

  setup() {

    usePlacesStore(); 

  }
});
</script>
