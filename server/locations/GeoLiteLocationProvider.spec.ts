import { GeoLiteLocationProvider } from '../locations/GeoLiteLocationProvider';
import { City, WebServiceClient } from '@maxmind/geoip2-node';
import { InvalidRequestError, NodeAppError } from '../../types';

const mockValidIpAddress = '142.1.1.1';
const mockInvalidIpAddress = 'invalid ip address';
const mockUnknownIpAddress = 'location unknown ip address';

jest.mock('@maxmind/geoip2-node', () => {
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
                        let newError: NodeJS.ErrnoException = {
                            name: 'error',
                            message: 'Error',
                            code: GeoLiteLocationProvider.INVALID_IP_ADDRESS
                        }
                        throw newError;
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
    it('returns invalid request error message for an invalid ip address', async (): Promise<void> => {
        const error: Error = await provider.provideLocation(mockInvalidIpAddress).catch(e => e);
        expect(
            error.name
        ).toEqual(InvalidRequestError.name)
    })
    it('returns error message for malformed response', async (): Promise<void> => {
        const error: Error = await provider.provideLocation(mockUnknownIpAddress).catch(e => e);
        expect(
            error.name
        ).toEqual(NodeAppError.name)
    })
})