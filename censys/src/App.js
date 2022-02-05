import React, { useState, useEffect } from "react";
import "./App.css";
import {
  TextField,
  Button,
} from "@mui/material/";
import { getLocation } from "./getLocation.js";
import LocationInfo from './LocationInfo';
import { isIPv4 } from 'is-ip';

const App = () => {
    const [ipAddress, setIpAddress] = useState("");
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);
    const [inputValid, setInputValid] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (ipAddress.length === 0) {
            setInputValid(true);
            setErrorMsg("");
        } else {
            setInputValid(isIPv4(ipAddress));
        }
    }, [ipAddress])

    const retrieveInfo = async () => {
        try {
            const result = await getLocation(ipAddress);
            setLong(result.longitude);
            setLat(result.latitude);
            setErrorMsg("");
        } catch {
            setErrorMsg("There was an error fetching the location");
            setLat(null);
            setLong(null);
        }
    };

    const handleIpAddressChange = (event) => {
        setIpAddress(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <TextField
                    error={errorMsg.length > 0}
                    label="Enter IP Address"
                    variant="standard"
                    onChange={handleIpAddressChange}
                    helperText={errorMsg}
                />
                <div className="SearchButton">
                    <Button
                        size="small"
                        variant="contained"
                        disabled={!inputValid}
                        onClick={retrieveInfo}
                    >Search</Button>
                </div>
            </header>
            {errorMsg.length === 0 && <LocationInfo lat={lat} long={long}/>}
        </div>
    );
}

export default App;
