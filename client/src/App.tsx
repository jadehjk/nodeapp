import React, { useState } from "react";
import "./App.css";
import { getLocation } from "./getLocation";
import LocationInfo from "./LocationInfo";
import SearchBox from "./SearchBox";

const App = () => {
    const [long, setLong] = useState<number | null>(null);
    const [lat, setLat] = useState<number | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    const retrieveInfo = async (ipAddress: string): Promise<void> => {
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
    return (
        <div className="App">
            <SearchBox onSearch={retrieveInfo} errorMsg={errorMsg}/>
            {errorMsg.length === 0 && <LocationInfo lat={lat} long={long}/>}
        </div>
    );
}

export default App;
