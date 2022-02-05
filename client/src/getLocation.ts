import axios from 'axios';
import { LocationInfo } from './types';

export async function getLocation(ipAddress: string): Promise<Record<string, number>> {
    try {
        const result = await axios.get('/getCity', {
            params: {
                ipAddress
            }
        })
        const location: LocationInfo = result.data.location; 
        return {
            latitude: location.latitude,
            longitude: location.longitude
        }
    } catch(err) {
        throw err;
    }
}