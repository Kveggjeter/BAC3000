declare module '@joergdietrich/leaflet.terminator' {
    import * as L from 'leaflet';

    export interface TerminatorOptions extends L.PolylineOptions {
        resolution?: number;
        time?: Date | string | number;
        longitudeRange?: number;
    }

    export interface Terminator extends L.Polygon {
        setTime(time?: Date | string | number): void;
        getTime(): Date;
    }

    export default function terminator(options?: TerminatorOptions): Terminator;
}
