import { GeoLiteLocationProvider } from "../locations/GeoLiteLocationProvider";
import { WebServiceClient } from "@maxmind/geoip2-node";

jest.mock("@maxmind/geoip2-node", () => {
    return {
        WebServiceClient: jest.fn().mockImplementation(() => {
            return {
                city() {
                    return {
                        location: {
                            latitude: 0.01,
                            longitude: 0.02
                        }
                    }
                }
            }
        })
    }
})

describe('Mock Implementation of GeoLiteLocation Provider', (): void => {
    const webServiceClientMock = new WebServiceClient('account', 'license')
    const provider: GeoLiteLocationProvider = new GeoLiteLocationProvider(webServiceClientMock);
    it('returns latitude and longitude', async (): Promise<void> => {
        const result = await provider.provideLocation("142.1.1.1");
        expect(
            result
        ).toEqual({
            latitude: 0.01,
            longitude: 0.02
        })
    })
})