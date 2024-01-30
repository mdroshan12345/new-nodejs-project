const assert = require('assert');
const http = require('http');

describe('Node.js Server', function () {
  // Start the server before tests
  before(function () {
    require('../your-server-script.js');
  });

  it('should respond with "node js hello world !!!"', function (done) {
    http.get('http://127.0.0.1:8000', function (res) {
      let data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.strictEqual(data.trim(), 'node js hello world !!!');
        done();
      });
    });
  });

  // Stop the server after tests
  after(function () {
    // Implement server shutdown logic if needed
  });
});