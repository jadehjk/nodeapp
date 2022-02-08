import express from 'express';
import locationRoute from './locationRoute';

const app = express();

app.use('/location', locationRoute);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Backend ready. App is listening on port ' + port);