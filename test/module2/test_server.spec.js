const axios = require("axios");
const expect = require("expect.js");

const base_url = "http://localhost:4000/"

describe("Server Running", function() {
  describe("GET /", function() {
    it("returns status code 200 @connection", (done) => {
      axios.get(base_url)
        .then((response) => {
            expect(response.status).to.be(200)
            done();
        })
        .catch((error) => done(error));
    });

    it("returns Store server running message", (done) => {
      axios.get(base_url)
      .then((response) => {
          expect(response.data).to.be("Store server running on port 4000")
          done();
      })
      .catch((error) => done(error));
    });
  });
});
