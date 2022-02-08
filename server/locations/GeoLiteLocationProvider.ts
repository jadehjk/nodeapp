import { City, WebServiceClient } from '@maxmind/geoip2-node';

import { Location, NodeAppError, InvalidRequestError } from '../../types';

/**
 * Uses the GeoLite web client to provide geo-locations for given ip addresses
 */
export class GeoLiteLocationProvider {
    public static readonly INVALID_IP_ADDRESS = 'IP_ADDRESS_RESERVED';
    private readonly geoLiteClient: WebServiceClient;

    constructor(client: WebServiceClient) {
        this.geoLiteClient = client;
    }
    
    async provideLocation(ipAddress: string): Promise<Location> {
        try {
            const city: City = await this.geoLiteClient.city(ipAddress);
            if (city.location) { // the Location field is optional in the City model
                return {
                    latitude: city.location.latitude,
                    longitude: city.location.longitude
                }
            }
            else {
                throw new Error('Location was undefined');
            }
        } catch (error) {
            const { code, message } = error as NodeJS.ErrnoException;
            if (code === GeoLiteLocationProvider.INVALID_IP_ADDRESS) {
                throw new InvalidRequestError(`${ipAddress} is a reserved IP address`);
            } else {
                throw new NodeAppError(`Failed to retrieve city information for ${ipAddress}: ${message}`);
            }
        }
    }
}