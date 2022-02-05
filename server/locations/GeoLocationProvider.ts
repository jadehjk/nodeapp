/**
 * Interface for producing geo-locations for given ip addresses
 */
import { City } from '../../types';

export interface GeoLocationProvider {
    provideLocation(ipAddress: string): Promise<City>;
}