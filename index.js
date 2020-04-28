require('dotenv').config();

const request = require('request'),
    data = require('./data.json');

const LOG_TAG = 'Webhooks Test Tool > ';

const debug = (...msg) => {
    console.info(LOG_TAG, ...msg);
};

const executeWebHook = async ({ url, form }) => {
    var payload = {
        url,
        method: 'POST',
        form,
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

const bootstrap = async () => {
    if(Array.isArray(data)) {
        for(let wb of data) {
            await executeWebHook(wb);
        }
    } else {
        await executeWebHook(data);
    }
};

bootstrap();