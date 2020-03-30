const fs = require('fs');
const expect = require('expect.js');

describe("Mongo tests @mongo", function () {
    it("Mongoose promise", function (done) {
        expect(fs.readFileSync('index.js').toString())
            .to.contain("mongoose.Promise = global.Promise;")
        done();
    })

    it("Mongoose connected", function (done) {
        expect(fs.readFileSync('index.js').toString())
            .to.contain("mongoose.connect('mongodb://localhost/productsdb'")
        done();
    });
});


