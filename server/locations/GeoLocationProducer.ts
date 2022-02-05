/**
 * Interface for producing geo-locations for given ip addresses
 */
 export interface GeoLocationProducer {

	//TODO: figure out the return type
	produceCity(ipAddress: string): Promise<any>;

	// future extensions
	// produceState(ipAddress: string): Promise<any>;
}