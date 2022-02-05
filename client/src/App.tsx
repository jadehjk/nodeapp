import React, { useState, useEffect } from "react";
import "./App.css";
import {
  TextField,
  Button,
} from "@mui/material";
import { getLocation } from "./getLocation";
import LocationInfo from "./LocationInfo";
import { isIPv4 } from "is-ip";

const App = () => {
    const [ipAddress, setIpAddress] = useState<string>("");
    const [long, setLong] = useState<number | null>(null);
    const [lat, setLat] = useState<number | null>(null);
    const [inputValid, setInputValid] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect((): void => {
        if (ipAddress.length === 0) {
            setInputValid(true);
            setErrorMsg("");
        } else {
            setInputValid(isIPv4(ipAddress));
        }
    }, [ipAddress])

    const retrieveInfo = async (): Promise<void> => {
        try {
            const result = await getLocation(ipAddress);
            setLong(result.longitude);
            setLat(result.latitude);
            setErrorMsg("");
        } catch(err) {
            setErrorMsg(`Failed to retrieve IP Address: ${ipAddress}`);
            setLat(null);
            setLong(null);
        }
    };

    const handleIpAddressChange = (event: React.FormEvent) => {
        setIpAddress((event.target as HTMLInputElement).value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="SearchBox">
                    <TextField
                        error={errorMsg.length > 0}
                        label="Enter IP Address"
                        variant="standard"
                        onChange={handleIpAddressChange}
                        helperText={errorMsg}
                    />
                </div>
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
