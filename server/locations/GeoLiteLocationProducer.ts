import { GeoLocationProducer } from "./GeoLocationProducer";
import { WebServiceClient } from "@maxmind/geoip2-node";

/**
 * Uses the GeoLite web client to produce geo-locations for given ip addresses
 */
export class GeoLiteLocationProducer implements GeoLocationProducer {

    private readonly geoLiteClient: WebServiceClient;

    /*
        If we want to reuse this for a paid version, we would instantiate a new
        GeoLiteLocationProducer like this:
        construct(accountId: string, license: string, endpoint: string) {
            this.geoLiteClient = new WebserviceClient(accountId, license);
        }
    */

    constructor(accountId: string, license: string, endpoint: string) {
        this.geoLiteClient = new WebServiceClient(accountId, license, {host: endpoint});
    }
    
    async produceCity(ipAddress: string): Promise<any> {
        try {
            return await this.geoLiteClient.city(ipAddress);
        } catch (error) { 
            console.error(`Failed to retrieve city information for ${ipAddress}`, error);
            throw error;
        }    
    }

}