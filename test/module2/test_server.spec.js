const fs = require('fs');
const expect = require('expect.js');

describe("Server tests", function () {
  it("returns status code 200 @connection", function (done) {
    expect(fs.readFileSync('index.js').toString())
      .to.contain("res.send(`Store server running on port ${PORT}`)")
    done();
  })

  it("returns Store server running message", function (done) {
    expect(fs.readFileSync('index.js').toString())
      .to.contain("console.log(`Your server is running on port ${PORT}`)")
    done();
  });
});
