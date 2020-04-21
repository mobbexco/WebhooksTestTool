require('dotenv').config();

const request = require('request'),
    data = require('./data.json');

const LOG_TAG = 'Webhooks Test Tool > ';

const debug = (...msg) => {
    console.info(LOG_TAG, ...msg);
};

const bootstrap = async () => {
    var payload = {
        url: process.env.URL,
        method: 'POST',
        form: data,
        timeout: 30000
    };

    // Log the call
    debug(payload);

    request(payload, (err, response, body) => {
        debug(err);
        debug(response.headers);
        debug(body);
    });
};

bootstrap();