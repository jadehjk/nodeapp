export interface LocationRecord {
    readonly latitude: number;
    readonly longitude: number;
}

export interface City {
    readonly location?: LocationRecord;
}