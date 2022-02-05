require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
const client = new WebServiceClient(process.env.ACCOUNT, process.env.LICENSE, {host: 'geolite.info'});

app.get('/getLocation', async (req, res) => {
    try{
        const { ipAddress } = req.query;
        const result = await client.city(ipAddress);
        res.send(result);
    } catch(err) {
        res.send(err)
    }
    
})
//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Backend ready. App is listening on port ' + port);
