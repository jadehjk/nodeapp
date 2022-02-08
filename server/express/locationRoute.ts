import express from "express";
import { locationProvider } from "./components";

const locationRoute = express.Router();

locationRoute.get("/", async (req, res) => {
    const { ipAddress } = req.query;
    try {
        if (!ipAddress) {
            return res.status(400).json({ message: 'IP Address Required' });
        }
        const result = await locationProvider.provideLocation(ipAddress as string);
        res.send(result);
    } catch(error) {
        const { code  } = error as NodeJS.ErrnoException;
        if (code === "IP_ADDRESS_RESERVED") {
            return res.status(400).json({ message: `${ipAddress} is a reserved address`});
        }
        return res.status(500).json({ message: "Something went wrong with the request"});
    }
})

export default locationRoute;