//exceptions.test.js
const exceptions = require('./exceptions');

test('Test To Throw Error', () => {
  expect(() => {
    exceptions('error');
  }).toThrow(Error);
});

test('Test To Throw Eval Error', () => {
  expect(() => {
    exceptions('eval');
  }).toThrow(EvalError);
});

test('Test To Throw Range Error', () => {
  expect(() => {
    exceptions('range');
  }).toThrow(RangeError);
});

test('Test To Throw Reference Error', () => {
  expect(() => {
    exceptions('reference');
  }).toThrow(ReferenceError);
});

test('Test To Throw Syntax Error', () => {
  expect(() => {
    exceptions('syntax');
  }).toThrow(SyntaxError);
});

test('Test To Throw Type Error', () => {
  expect(() => {
    exceptions('type');
  }).toThrow(TypeError);
});

test('Test To Uri Type Error', () => {
  expect(() => {
    exceptions('uri');
  }).toThrow(URIError);
});

