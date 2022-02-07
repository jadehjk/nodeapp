import "./LocationInfo.css";
import {
    Typography
 } from "@mui/material";

const LocationInfo: React.FC<{lat: number|null, long: number|null}> = (props) => {
    return (
        <div className="LocationInfo">
            {props.lat && <Typography variant="h4">Latitude: {props.lat}</Typography>}
            {props.long && <Typography variant="h4">Longitude: {props.long}</Typography>}
        </div>
    )
}

export default LocationInfo;
