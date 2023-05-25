import { MutationTree } from "vuex";
import { MapState } from "./state";
import Mapboxgl from "mapbox-gl";

const mutations: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map
    }
}

export default mutations;
