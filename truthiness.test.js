//truthiness.test.js
const truthiness = require('./truthiness');

test('Test To Be Null', () => {
  expect(truthiness('null')).toBeNull();
});

test('Test Not To Be Null', () => {
  expect(truthiness('nul')).not.toBeNull();
});

test('Test To Be Defined', () => {
  expect(truthiness('defined')).toBeDefined();
});

test('Test Not To Be Defined', () => {
  expect(truthiness('undefined')).not.toBeDefined();
});

test('Test To Be Undefined', () => {
  expect(truthiness('undefined')).toBeUndefined();
});

test('Test Not To Be Undefined', () => {
  expect(truthiness('defined')).not.toBeUndefined();
});

test('Test To Be Truthy', () => {
  expect(truthiness('true')).toBeTruthy();
});

test('Test Not To Be Truthy', () => {
  expect(truthiness('false')).not.toBeTruthy();
});

test('Test To Be Falsy', () => {
  expect(truthiness('false')).toBeFalsy();
});

test('Test Not To Be Falsy', () => {
  expect(truthiness('true')).not.toBeFalsy();
});
