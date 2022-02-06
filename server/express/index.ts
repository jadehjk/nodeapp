import express from "express";
import { locationProvider } from "./components";

const app = express();

app.get("/getLocation", async (req, res) => {
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

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Backend ready. App is listening on port ' + port);