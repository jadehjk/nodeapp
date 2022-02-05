import axios from "axios";
import { City } from "../../types";

export async function getLocation(ipAddress: string): Promise<Record<string, number>> {
    try {
        const result = await axios.get('/getLocation', {
            params: {
                ipAddress
            }
        })
        const { latitude, longitude }: { latitude: number, longitude: number } = result.data.location;
        return {
            latitude,
            longitude
        }
    } catch(err) {
        throw err;
    }
}