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
            props.onResetErrorMessage();
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
            <div className="TextBox">
                <TextField
                    error={props.errorMsg.length > 0}
                    label="Enter IP Address"
                    variant="standard"
                    fullWidth
                    onChange={handleIpAddressChange}
                    helperText={props.errorMsg}
                />
            </div>
            <div className="SearchButton">
                <Button
                    size="small"
                    variant="contained"
                    disabled={!inputValid || !ipAddress.length}
                    onClick={retrieveInfo}
                >Search</Button>
            </div>
        </div>
    )
}

export default SearchBox;