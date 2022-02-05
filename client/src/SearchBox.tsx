import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { isIPv4 } from "is-ip";
import "./SearchBox.css";

const SearchBox = (props: any) => {
    const [ipAddress, setIpAddress] = useState<string>("");
    const [inputValid, setInputValid] = useState(true);

    useEffect((): void => {
        if (ipAddress.length === 0) {
            setInputValid(true);
        } else {
            setInputValid(isIPv4(ipAddress));
        }
    }, [ipAddress]);

    const retrieveInfo = (): void => {
        props.onSearch(ipAddress);
    };

    const handleIpAddressChange = (event: React.FormEvent) => {
        setIpAddress((event.target as HTMLInputElement).value);
    };

    return (
        <div className="SearchBox">
            <TextField
                error={props.errorMsg.length > 0}
                label="Enter IP Address"
                variant="standard"
                onChange={handleIpAddressChange}
                helperText={props.errorMsg}
            />
            <div className="SearchButton">
                <Button
                    size="small"
                    variant="contained"
                    disabled={!inputValid}
                    onClick={retrieveInfo}
                >Search</Button>
            </div>
        </div>
    )
}

export default SearchBox;