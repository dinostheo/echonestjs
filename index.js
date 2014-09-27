var http        = require('http'),
    querystring = require('querystring');

var api_key = '';

var setKey = function (key) {
    api_key = key;
};

var query = function (endpoint, params, callback) {
    if (!api_key.trim()) {
        return callback('API KEY is not set.');
    }

    var str     = '';
    var options = {
        host: 'developer.echonest.com',
        path: '/api/v4/' + endpoint + '?api_key=' +  api_key
    };

    http.get(options, function (response) {
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('error', function (err) {
            return callback('Error: ' + err.message);
        });

        response.on('end', function () {
            return callback(null, str);
        });
    }).end();
};

module.exports = {
    setKey: setKey,
    query: query
};