import React from "react";
import "./LocationInfo.css";
import {
    Typography
 } from "@mui/material/";

const LocationInfo = (props) => {
    return (
        <div className="LocationInfo">
            {props.lat > 0 && <Typography variant="h4">Latitude: {props.lat}</Typography>}
            {props.long > 0 && <Typography variant="h4">Longitude: {props.long}</Typography>}
        </div>
    )
}

export default LocationInfo;
