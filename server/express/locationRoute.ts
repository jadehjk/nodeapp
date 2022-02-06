import { locationProvider } from "./components";
import express from "express";

const index = express.Router();

// future extensions: set up request chains and split into routes
index.get("/getLocation", async (req, res) => {
    try{
        const { ipAddress } = req.query;
        if (!ipAddress) {
            return res.status(500).json({ msg: 'IP Address Required' });
        }
        const result = await locationProvider.provideLocation(ipAddress as string);
        res.send(result);
    } catch(err) {
        res.send(err);
    }
})

export default index;