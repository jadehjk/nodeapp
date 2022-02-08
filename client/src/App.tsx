import React, { useState } from 'react';
import './App.css';
import { getLocation } from './getLocation';
import LocationInfo from './LocationInfo';
import SearchBox from './SearchBox';

const App = () => {
    const [long, setLong] = useState<number | null>(null);
    const [lat, setLat] = useState<number | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const resetErrors = (): void => {
        setErrorMsg('');
    };

    const retrieveInfo = async (ipAddress: string): Promise<void> => {
        try {
            setLoading(true);
            const result = await getLocation(ipAddress);
            setLong(result.longitude);
            setLat(result.latitude);
            setLoading(false);
            setErrorMsg('');
        } catch(err: any) {
            setErrorMsg(err.response.data.message);
            setLat(null);
            setLong(null);
            setLoading(false);
        }
    };

    return (
        <div className='App'>
            <SearchBox
                onSearch={retrieveInfo}
                onResetErrorMessage={resetErrors}
                errorMsg={errorMsg}
                loading={loading}
            />
            {errorMsg.length === 0 && <LocationInfo lat={lat} long={long}/>}
        </div>
    );
}

export default App;
