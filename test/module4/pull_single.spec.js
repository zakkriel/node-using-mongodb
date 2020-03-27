const expect = require("expect.js");
const axios = require("axios");

describe('Find a single product', () => {
    const url = 'http://localhost:4000/products';

    it('Add controler to pull a single item @controller-single', (done) => {
        let watch = { name: 'Blue Watch', description: 'a new watch' };

        axios.post(url, watch)
        .then((response) => {
            axios.get(`${url}/${response.data._id}`)
            .then((response) => {
                expect(response.data.name).to.contain("Blue Watch");
                done();
            })
        })
        .catch((error) => done(error));
        done();
    })

    it('Add route to pull a single item @route-single', (done) => {
        let watch = { name: 'Red Watch', description: 'a new watch' };

        axios.post(url, watch)
        .then((response) => {
            axios.get(`${url}/${response.data._id}`)
            .then((response) => {
                expect(response.data.name).to.contain("Red Watch");
                done();
            })
        })
        .catch((error) => done(error));
        done();
    })

});
