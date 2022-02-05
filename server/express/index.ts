import { locationProducer } from "./components";
import express from "express";

const app = express();
// future extensions: set up request chains and split into routes
app.get('/getCity', async (req, res) => {
    try{
        const { ipAddress } = req.query;
        const result = await locationProducer.produceCity(ipAddress as string);
        res.send(result);
    } catch(err) {
        res.send(err)
    }
    
})
//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Backend ready. App is listening on port ' + port);