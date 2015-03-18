var echonest = require('../index.js'),
    expect = require('chai').expect,
    config = require('../config/config.js');

describe('Echonest module testing.', function () {

    describe('Error case in no key', function () {
        it('should return an error object when no api key is set.', function (done) {
            echonest.get('song/search', { artist: "led zeppelin" }, function (err, res) {
                expect(res).to.be.an('undefined');
                expect(err.message).to.equal('API KEY is not set.');

                done();
            });
        });
    });

    describe('Error case in no valid endpoint', function () {
        it('should return an error when an invalid echonest endpoint is used.', function (done) {
            echonest.setKey(config.api_key);
            echonest.get('zong/zearch', { artist: "led zeppelin" }, function (err, res) {
                expect(err).to.equal('<html><title>404: Not Found</title><body>404: Not Found</body></html>');

                done();
            });
        });
    });

    describe('Success case', function () {
        it('should return a results object.', function (done) {
            echonest.setKey(config.api_key);
            echonest.get('song/search', { artist: "led zeppelin" }, function (err, res) {
                expect(res.response.status.message).to.equal('Success');
                expect(res.response.songs).to.be.an('array');

                done();
            });
        });
    });

});
