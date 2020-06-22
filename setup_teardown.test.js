//setup_teardown.test.js

const setup = require('./setup_teardown');

describe('SetupTeardown Testing', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll')
  });

  beforeEach(() => {
    console.log('beforeEach')
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('First test', () => {
    console.log('inside test 1')
    expect(1 + 2).toBe(3);
  });

  test('Second test', () => {
    console.log('inside test 2')
    expect(1 + 1).not.toBe(3);
  });
})