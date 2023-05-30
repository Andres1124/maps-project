import { Feature } from "@/interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // lgn, lat
    isLoadingPLaces: boolean;
    places: Feature[];
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        isLoadingPLaces: false,
        places: [],
    }
}

export default state;
