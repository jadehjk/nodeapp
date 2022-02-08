import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { isIPv4 } from 'is-ip';
import './SearchBox.css';

const SearchBox: React.FC<{
    onResetErrorMessage: () => void, onSearch: (ipAddress: string) => void, errorMsg: string, loading: boolean
}> = (props) => {
    const [ipAddress, setIpAddress] = useState<string>('');
    const [inputValid, setInputValid] = useState(true);

    useEffect((): void => {
        if (ipAddress.length === 0) {
            setInputValid(true);
            props.onResetErrorMessage();
        } else {
            setInputValid(isIPv4(ipAddress));
        }
    }, [ipAddress, props]);

    const retrieveInfo = (): void => {
        props.onSearch(ipAddress);
    };

    const handleIpAddressChange = (event: React.FormEvent) => {
        setIpAddress((event.target as HTMLInputElement).value);
    };

    const handleEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && inputValid && ipAddress.length > 0) {
            retrieveInfo();
        }
    };

    return (
        <div className='SearchBox'>
            <div className='TextBox'>
                <TextField
                    error={props.errorMsg.length > 0}
                    label='Enter IP Address'
                    variant='standard'
                    fullWidth
                    onChange={handleIpAddressChange}
                    onKeyPress={handleEnter}
                    helperText={props.errorMsg}
                />
            </div>
            <div className='SearchButton'>
                <LoadingButton
                    size='small'
                    variant='contained'
                    loading={props.loading}
                    disabled={!inputValid || !ipAddress.length}
                    onClick={retrieveInfo}
                >Search</LoadingButton>
            </div>
        </div>
    )
}

export default SearchBox;