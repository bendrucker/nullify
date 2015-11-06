'use strict'

module.exports = function nullify (fn) {
  return function nulled (value) {
    return value === null ? null : fn(value)
  }
}
