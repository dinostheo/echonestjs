echonestjs
==========
[![wercker status](https://app.wercker.com/status/b0a69be62c6e329881c0840bff3caa5e/s "wercker status")](https://app.wercker.com/project/bykey/b0a69be62c6e329881c0840bff3caa5e)

Simple node.js client for querying the echonest api.

## Installation
```
  npm install echonestjs --save
```

## Usage
```
  setKey('YOUR ECHONEST API KEY');

  get('echonest/endpoint', {'the necessary parameters'}, callback);
```

e.g.

```
  var echonest = require('echonestjs');

  echonest.setKey('123456789');

  echonest.get('song/search', { artist: "led zeppelin" }, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
  });
```

## Tests
To run the tests simply execute:
```
    npm test
```

The tests have a dependency of a configuration file config/config.js of the following structure:
```
/**
 * Module configuration.
 *
 * Contains the echonest api key for the tests.
 *
 * config/config.js
 */
module.exports = {
    api_key: 'PLACE YOUR ECHONEST API KEY HERE'
};
```

## Dependencies

[request](https://github.com/request/request)
