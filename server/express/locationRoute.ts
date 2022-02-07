import express from "express";
import { locationProvider } from "./components";

const locationRoute = express.Router();

locationRoute.get("/", async (req, res) => {
    try {
        const { ipAddress } = req.query;
        if (!ipAddress) {
            return res.status(500).json({ msg: 'IP Address Required' });
        }
        const result = await locationProvider.provideLocation(ipAddress as string);
        res.send(result);
    } catch(err) {
        res.status(400).send(err);
    }
})

export default locationRoute;