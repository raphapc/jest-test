//strings.test.js
const strings = require('./strings');

test('Test To Match Any Character', () => {
  expect(strings('Jest Qualification Procedure')).toMatch(new RegExp('.*Qualification.*'));
});

test('Test To Match Exact Character', () => {
  expect(strings('Jest')).toMatch(new RegExp('Jest'));
});

test('Test To Match Digits', () => {
  expect(strings('Jest v25')).toMatch(new RegExp('Jest v[0-2][0-5]'));
});

test('Test Not To Match Digits', () => {
  expect(strings('Jest v25')).not.toMatch(new RegExp('Jest v[0-1][0-5]'));
});
