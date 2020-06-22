//common.test.js
const common = require('./common');

test('Test To Be', () => {
  expect(1 + 2).toBe(3);
});

test('Test To Be', () => {
  expect(1 + 1).toBe(2);
});

test('Test Not To Be', () => {
  expect(1 + 1).not.toBe(3);
});

test('Test To Equal', () => {
  expect('Je' + 'st').toEqual('Jest');
});

test('Test Not To Equal', () => {
  expect('Je' + 'st').not.toEqual('Jest1');
});
