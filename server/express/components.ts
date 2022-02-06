import "dotenv/config";
import { WebServiceClient } from "@maxmind/geoip2-node";
import { GeoLiteLocationProvider } from "../locations/GeoLiteLocationProvider";
import { GEO_LITE_ENDPOINT } from "../constants";

const client: WebServiceClient = new WebServiceClient(process.env.ACCOUNT as string, process.env.LICENSE as string, {host: GEO_LITE_ENDPOINT});

export const locationProvider: GeoLiteLocationProvider = new GeoLiteLocationProvider(client);