import "dotenv/config";
import { GeoLiteLocationProvider } from "../locations/GeoLiteLocationProvider";
import { GeoLocationProvider } from "../locations/GeoLocationProvider";
import { GEO_LITE_ENDPOINT } from "../constants"

export const locationProvider: GeoLocationProvider = new GeoLiteLocationProvider(process.env.ACCOUNT as string, process.env.LICENSE as string, GEO_LITE_ENDPOINT);