//exceptions.js
// list of errors in https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
function exceptions(input) {
  if (input == 'eval') {
    throw new EvalError()
  } else if (input == 'range') {
    throw new RangeError()
  } else if (input == 'reference') {
    throw new ReferenceError()
  } else if (input == 'syntax') {
    throw new SyntaxError()
  } else if (input == 'type') {
    throw new TypeError()
  } else if (input == 'uri') {
    throw new URIError()
  } else {
    throw new Error()
  }
}
module.exports = exceptions;
