class Async {

  fetchCallback(callback) {
    callback('Jest');
  }

  fetchPromise() {
    const promise = new Promise((resolve) => {
      resolve('Jest');
    });
    return promise;
  }

  async fetchAsync() {
    return 'Jest'
  }
}

module.exports = Async;