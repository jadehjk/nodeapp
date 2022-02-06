import { GeoLiteLocationProvider } from "../locations/GeoLiteLocationProvider";
import { City, WebServiceClient } from "@maxmind/geoip2-node";

const mockValidIpAddress = "142.1.1.1";
const mockInvalidIpAddress = "invalid ip address";
const mockUnknownIpAddress = "location unknown ip address";

jest.mock("@maxmind/geoip2-node", () => {
    return {
        WebServiceClient: jest.fn().mockImplementation(() => {
            return {
                city(ipAddress: string): City {
                    if (ipAddress === mockValidIpAddress) {
                        return {
                            location: {
                                latitude: 0.01,
                                longitude: 0.02
                            }
                        } as unknown as City;
                    }
                    else if (ipAddress === mockUnknownIpAddress) {
                        return {} as unknown as City;
                    } else {
                        throw new Error("Error");
                    }
                }
            }
        })
    }
})

describe('Mock Implementation of GeoLiteLocation Provider', (): void => {
    const webServiceClientMock = new WebServiceClient('account', 'license');
    const provider: GeoLiteLocationProvider = new GeoLiteLocationProvider(webServiceClientMock);
    it('returns latitude and longitude for a valid ip address', async (): Promise<void> => {
        const result = await provider.provideLocation(mockValidIpAddress);
        expect(
            result
        ).toEqual({
            latitude: 0.01,
            longitude: 0.02
        })
    })
    it('returns error message for an invalid ip address', async (): Promise<void> => {
        const error: Error = await provider.provideLocation(mockInvalidIpAddress).catch(e => e);
        expect(
            error.message
        ).toEqual(`Failed to retrieve city information for ${mockInvalidIpAddress}: Error`)
    })
    it('returns error message for malformed response', async (): Promise<void> => {
        const error: Error = await provider.provideLocation(mockUnknownIpAddress).catch(e => e);
        expect(
            error.message
        ).toEqual(`Failed to retrieve city information for ${mockUnknownIpAddress}: Location was undefined`)
    })
})