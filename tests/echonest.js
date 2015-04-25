var Echonest = require('../'),
    expect = require('chai').expect,
    config = require('../config/config');

describe('Echonest module testing.', function () {
    describe('Error case in no key', function () {
        it('should return an error object when no api key is set.', function (done) {
            Echonest.get('song/search', { artist: 'led zeppelin' }, function (err, res) {
                expect(res).to.be.an('undefined');
                expect(err.message).to.equal('API KEY is not set.');

                done();
            });
        });
    });

    describe('Echonest api key is set: ', function () {
        before(function (done) {
            Echonest.init(config.api_key);
            done();
        });

        describe('Error case in no valid endpoint', function () {
            it('should return an error when an invalid echonest endpoint is used.', function (done) {
                Echonest.get('zong/zearch', { artist: 'led zeppelin' }, function (err, res) {
                    expect(err).to.equal('<html><title>404: Not Found</title><body>404: Not Found</body></html>');

                    done();
                });
            });
        });

        describe('Success case', function () {
            it('should return a results object.', function (done) {
                Echonest.get('song/search', { artist: 'led zeppelin' }, function (err, res) {
                    expect(res.response.status.message).to.equal('Success');
                    expect(res.response.songs).to.be.an('array');

                    done();
                });
            });
        });
    });
});
