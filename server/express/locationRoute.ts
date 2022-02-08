import express from 'express';
import { NodeAppError } from '../../types';
import { locationProvider } from './components';

const locationRoute = express.Router();

locationRoute.get('/', async (req, res) => {
    const { ipAddress } = req.query;
    try {
        if (!ipAddress) {
            return res.status(400).json({ message: 'IP Address Required' });
        }
        const result = await locationProvider.provideLocation(ipAddress as string);
        res.send(result);
    } catch(error) {
        const { httpStatus, message  } = error as NodeAppError;
        const status = httpStatus ? httpStatus : 500;
        return res.status(status).json({ message });
    }
})

export default locationRoute;