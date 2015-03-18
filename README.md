echonestjs
==========

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

## Dependencies

[request](https://github.com/request/request)
