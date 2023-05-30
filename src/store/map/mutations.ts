import { MutationTree } from "vuex";
import { MapState } from "./state";
import Mapboxgl from "mapbox-gl";
import { Feature } from "@/interfaces/places";

const mutations: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map
    },
    
    setPlaceMarkers(state, places: Feature[]) {
        // borrar marcadores
        state.markers.forEach(marker => marker.remove());
        state.markers = [];
        
        if (!state.map) return;

        // Crear marcadores
        for(const place of places) {
            const [lng, lat] = place.center;

            const popUp = new Mapboxgl.Popup()
                .setLngLat([lng, lat])
                .setHTML(`
                    <h4>${place.text}</h4>
            `)

            const marker = new Mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popUp)
                .addTo(state.map!)

            state.markers.push(marker);

        }
    }
}

export default mutations;
