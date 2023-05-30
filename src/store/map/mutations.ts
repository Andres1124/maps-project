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
    },

    setRoutePolyline(state, coords: number[][]) {
        const start = coords[0];
        const end   = coords[coords.length - 1];


        // definir los bounds
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        );

        // agregamos cada puntos al bounds
        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]]; 
            bounds.extend(newCoord);
        }

        state.map?.fitBounds(bounds, {
            padding: 200,
        });

        // polyline
        const sourceData: Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords,
                        }
                    }
                ]
            }
        }

        if(state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
        }

        state.map?.addSource('RouteString', sourceData);

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        });
    }

}

export default mutations;
