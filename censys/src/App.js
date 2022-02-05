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
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);
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
            setLat(0);
            setLong(0);
        }
    };

    const handleIpAddressChange = (event) => {
        setIpAddress(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <TextField
                    error={!inputValid}
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
            <LocationInfo lat={lat} long={long}/>
        </div>
    );
}

export default App;
