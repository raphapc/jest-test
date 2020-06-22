//numbers.test.js
const add_decimal = require('./numbers');

test('Test To Be Greater Than', () => {
  expect(add_decimal(10)).toBeGreaterThan(10);
});

test('Test Not To Be Greater Than', () => {
  expect(add_decimal(9)).not.toBeGreaterThan(10);
});

test('Test To Be Greater Than Or Equal', () => {
  expect(add_decimal(10)).toBeGreaterThanOrEqual(10.1);
});

test('Test Not To Be Greater Than Or Equal', () => {
  expect(add_decimal(10)).not.toBeGreaterThanOrEqual(10.2);
});

test('Test To Be Less Than', () => {
  expect(add_decimal(10)).toBeLessThan(10.2);
});

test('Test Not To Be Less Than', () => {
  expect(add_decimal(10)).not.toBeLessThan(10.1);
});

test('Test To Be Less Than Or Equal', () => {
  expect(add_decimal(10)).toBeLessThanOrEqual(10.1);
});

test('Test Not To Be Less Than Or Equal', () => {
  expect(add_decimal(10)).not.toBeLessThanOrEqual(10.0);
});

// toBeCloseTo precision is "< 0.005", in javascript 10 + 0.1 is 10.100000000000000782
test('Test To Be Close To', () => {
  expect(add_decimal(10)).toBeCloseTo(10.104);
});

test('Test Not To Be Close To', () => {
  expect(add_decimal(10)).not.toBeCloseTo(10.105);
});

