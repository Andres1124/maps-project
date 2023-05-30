import { MutationTree } from "vuex";
import { PlacesState } from "./state";
import { Feature } from "@/interfaces/places";

const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, coords: {lng: number, lat: number}) {
        state.userLocation = [coords.lng, coords.lat]
        state.isLoading = false
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPLaces = true;
    },

    setPlaces(state, places: Feature[]) {
        state.places = places;
        state.isLoadingPLaces = false;
    }
}

export default mutation;
