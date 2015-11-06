# nullify [![Build Status](https://travis-ci.org/bendrucker/nullify.svg?branch=master)](https://travis-ci.org/bendrucker/nullify)

> Wrap a function to only run on non-null values


## Install

```
$ npm install --save nullify
```


## Usage

```js
var nullify = require('nullify')

nullify(reverse)('foo')
//=> oof

nullify(reverse)(null)
//=> null

function reverse (string) {
  return string.split('').reverse().join('')
}
```

## API

#### `nullify(fn)` -> `function`

Returns a function that passes through to `fn` when the outer function receives a non-null value.

##### fn

*Required*  
Type: `function`


## License

MIT © [Ben Drucker](http://bendrucker.me)
