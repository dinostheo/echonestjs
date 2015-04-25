/**
 * DEPENDENCIES
 */
var request = require('request'),
    qs = require('querystring');

var Echonest = new Function();

Echonest.prototype = {

    /**
     * Initializes the echonest module and sets the api keu.
     *
     * @param {String} key The echonest developer API KEY
     */
    init: function (key) {
        this.api_key = key;
    },

    /**
     * GET request to the specified echonest endpoint.
     *
     * @param  {String}   endpoint The specified echonest endpoint to GET
     * @param  {Object}   params   An object that contains the GET query parameters.
     * @param  {Function} done     Callback function that takes err and result as parameters.
     */
    get: function (endpoint, params, done) {
        if (!this.api_key || !this.api_key.trim()) {
            return done({
                message: 'API KEY is not set.'
            });
        }

        var base_url = 'http://developer.echonest.com',
            path = '/api/v4/' + endpoint + '?api_key=' +  this.api_key + '&format=json',
            params = params ? '&' + qs.stringify(params) : '';

        request(base_url + path + params, function (err, response, body) {
            if (err || response.statusCode !== 200) {
                return done(err || body);
            }

            done(null, JSON.parse(body));
        });
    }
}

module.exports = new Echonest();
