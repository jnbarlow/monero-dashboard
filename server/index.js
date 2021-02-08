const dotenv = require('dotenv');
dotenv.config();

const log = require('loglevel-colors')('Main');
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = process.env.port || 3000;
const remote_node = `${process.env.MONERO_HOST || 'localhost'}:${process.env.MONERO_PORT || 18081}`;

app.use('/api', proxy(remote_node));

app.get('/settings', (req, res) => {
    const { MONERO_HOST, MONERO_PORT, TICKER } = process.env;
    res.send({
        MONERO_HOST,
        MONERO_PORT,
        TICKER
    });
});

app.use('/', express.static('client/build'));

app.listen(port, () => {
    log.info(`Monero Dashboard proxy running on port ${port}`);
    log.info(`Remote node: ${remote_node}`);
});
