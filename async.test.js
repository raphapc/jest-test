const asyncClass = require('./async');

test('should work via callback', done => {
  function callback(text) {
    expect(text).toBe('Jest');
    done();
  }
  const async = new asyncClass();
  async.fetchCallback(callback);
});

test('should work via promise', done => {

  const async = new asyncClass();

  async.fetchPromise().then(text => {
    expect(text).toBe('Jest');
    done();
  });
});

test('should work via async/await', async () => {
  const async = new asyncClass();
  const text = await async.fetchAsync();
  expect(text).toBe('Jest');
});