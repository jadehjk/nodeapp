import "dotenv/config";
import { GeoLiteLocationProvider } from "../locations/GeoLiteLocationProvider";
import { GEO_LITE_ENDPOINT } from "../constants"

export const locationProvider: GeoLiteLocationProvider = new GeoLiteLocationProvider(process.env.ACCOUNT as string, process.env.LICENSE as string, GEO_LITE_ENDPOINT);