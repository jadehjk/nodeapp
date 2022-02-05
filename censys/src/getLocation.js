import axios from 'axios';

export async function getLocation(ipAddress) {
    try {
        const result = await axios.get('/getLocation', {
            params: {
                ipAddress
            }
        })
        const { latitude, longitude } = result.data.location;
        return {
            latitude,
            longitude
        }
    } catch(err) {
        throw err;
    }
}