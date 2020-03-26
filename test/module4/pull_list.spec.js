const axios = require("axios");
const expect = require("expect.js");

describe('Pulling products', () => {
    const url = 'http://localhost:4000/products';

    it('Add controler to pull a list of items @controller-lists', (done) => {
        axios.get(url)
        .then((response) => {
            expect(response.data).to.be.an("array")
            done();
        })
        .catch((error) => done(error));
    })

    it('Add route to pull a list of items @route-lists', (done) => {
        axios.get(url)
        .then((response) => {
            expect(response.data).to.be.an("array")
            done();
        })
        .catch((error) => done(error));
    });
});
