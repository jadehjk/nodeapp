import "dotenv/config";
import { GeoLiteLocationProducer } from "../locations/GeoLiteLocationProducer";
import { GeoLocationProducer } from "../locations/GeoLocationProducer";
import { GEO_LITE_ENDPOINT } from "../constants"

export const locationProducer: GeoLocationProducer = new GeoLiteLocationProducer(process.env.ACCOUNT as string, process.env.LICENSE as string, GEO_LITE_ENDPOINT);