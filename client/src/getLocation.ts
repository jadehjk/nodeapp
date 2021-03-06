import axios from 'axios';

export async function getLocation(ipAddress: string): Promise<Record<string, number>> {
    try {
        const result = await axios.get('/location', {
            params: {
                ipAddress
            }
        })
        const { latitude, longitude }: { latitude: number, longitude: number } = result.data;
        return {
            latitude,
            longitude
        }
    } catch(error) {
        throw error;
    }
}