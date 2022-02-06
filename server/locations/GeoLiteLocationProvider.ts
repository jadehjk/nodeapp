import { WebServiceClient } from "@maxmind/geoip2-node";

import { City, LocationRecord } from '../../types';

/**
 * Uses the GeoLite web client to provide geo-locations for given ip addresses
 */
export class GeoLiteLocationProvider {

    private readonly geoLiteClient: WebServiceClient;

    /*
        If we want to reuse this for a paid version, we would instantiate a new
        GeoLiteLocationProducer like this:
        construct(accountId: string, license: string, endpoint: string) {
            this.geoLiteClient = new WebserviceClient(accountId, license);
        }
    */

    constructor(client: WebServiceClient) {
        this.geoLiteClient = client;
    }
    
    async provideLocation(ipAddress: string): Promise<LocationRecord> {
        try {
            const city: City = await this.geoLiteClient.city(ipAddress);
            const { latitude, longitude }: LocationRecord = city.location as LocationRecord;
            return {
                latitude,
                longitude
            }
        } catch (error) { 
            console.error(`Failed to retrieve city information for ${ipAddress}`, error);
            throw error;
        }    
    }

}