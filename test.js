'use strict'

var test = require('tape')
var nullify = require('./')

test(function (t) {
  t.equals(nullify(reverse)('foo'), 'oof')
  t.equals(nullify(reverse)(null), null)
  t.end()

  function reverse (string) {
    return string.split('').reverse().join('')
  }
})
