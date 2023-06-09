export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  Language;
    place_name_es: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context?:      Context[];
}

export interface Context {
    id:           string;
    mapbox_id:    string;
    text_es:      string;
    text:         string;
    wikidata?:    Wikidata;
    language_es?: Language;
    language?:    Language;
    short_code?:  string;
}

export enum Language {
    Es = "es",
}

export enum Wikidata {
    Q123304 = "Q123304",
    Q48278 = "Q48278",
    Q739 = "Q739",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    short_code?: string;
    wikidata?:   Wikidata;
    mapbox_id?:  string;
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
}
