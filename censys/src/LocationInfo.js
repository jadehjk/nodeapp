import React from "react";
import "./LocationInfo.css";
import {
    Typography
 } from "@mui/material/";

const LocationInfo = (props) => {
    return (
        <div className="LocationInfo">
            {props.lat && <Typography variant="h4">Latitude: {props.lat}</Typography>}
            {props.long && <Typography variant="h4">Longitude: {props.long}</Typography>}
        </div>
    )
}

export default LocationInfo;
