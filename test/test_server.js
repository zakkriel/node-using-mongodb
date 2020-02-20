const request = require("request");
const expect = require("expect.js");

const base_url = "http://localhost:4000/"

describe("Server Running", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).to.be(200);
        done();
      });
    });

    it("returns Store server running message", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).to.be("Store server running on port 4000");
        done();
      });
    });
  });
});
