require('dotenv').config();

const axios = require('axios'),
    data = require('./data.json'),
    qs = require('qs');

const LOG_TAG = 'Webhooks Test Tool > ';

const debug = (...msg) => {
    console.info(LOG_TAG, ...msg);
};

const executeWebHook = async ({ url, data }) => {
    var payload = {
        url: url ?? process.env.WEBHOOK_URL,
        method: 'POST',
        timeout: 30000
    };

    const format = process.env.FORMAT ?? 'json';

    if (format === 'json') {
        payload.data = data;
    } else if (format === 'form') {
        payload.data = qs.stringify(data);
        payload.headers = {
            'content-type': 'application/x-www-form-urlencoded'
        }
    } else {
        debug("FORMAT NOT SUPPORTED");
        return;
    }

    // Log the call
    debug(payload);

    try {
        const response = await axios(payload);

        debug("--- Webhook Sucessfully Send! ---");
        debug(response.headers);
        debug(response.data);
    } catch(error) {
        if (error.response) {
            debug(error.response.headers);
            debug(error.response.data);

        } else if(error.request) {
            debug("--- No response from destination server ---");

        } else {
            debug(error.message);
        }
    }
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