import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchApi } from "@/apis";
import { PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({commit}) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            (err) => {
                console.error(err)
                throw new Error("No gelocation");
            }
        )
    },

    async searchPlacesByTerm({ commit, state }, query: string) {
        
        const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        console.log(response.data.features);
    }
}

export default actions;
