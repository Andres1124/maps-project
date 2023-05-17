export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; // lgn, lat
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;
