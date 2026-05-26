const https = require('https');

const data = JSON.stringify({
    "q": "site:indiatoday.in India vs New Zealand"
});

const options = {
    hostname: 'google.serper.dev',
    path: '/search',
    method: 'POST',
    headers: {
        'X-API-KEY': 'aa9c294411da842997aa4241e937b2fe8e265d6c',
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, res => {
    let chunks = [];
    res.on('data', d => chunks.push(d));
    res.on('end', () => console.log(JSON.stringify(JSON.parse(Buffer.concat(chunks).toString()), null, 2)));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
