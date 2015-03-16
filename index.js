/**
 * DEPENDENCIES
 */
var request = require('request'),
    qs = require('querystring');

var API_KEY;

module.exports = {

    /**
     * Sets the API KEY for echonest.
     *
     * @param {String} key The echonest developer API KEY
     */
    setKey: function (key) {
        API_KEY = key;
    },

    /**
     * GET request to the specified echonest endpoint.
     *
     * @param  {String}   endpoint The specified echonest endpoint to GET
     * @param  {Object}   params   An object that contains the GET query parameters.
     * @param  {Function} done     Callback function that takes err and result as parameters.
     */
    get: function (endpoint, params, done) {
        if (!API_KEY.trim()) {
            return done({
                message: 'API KEY is not set.'
            });
        }

        var base_url = 'http://developer.echonest.com',
            path = '/api/v4/' + endpoint + '?api_key=' +  API_KEY,
            params = params ? '&' + qs.stringify(params) : '';

        request(base_url + path + params, function (err, response, body) {
            if (err) {
                return done(err);
            }

            done(null, JSON.parse(body));
        });
    }

}
