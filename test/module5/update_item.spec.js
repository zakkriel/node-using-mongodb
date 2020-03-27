const expect = require("expect.js");
const axios = require("axios");

describe('Updating a product', () => {
    const url = 'http://localhost:4000/products';

    it('Add a controler to update a product @controller-update', (done) => {
        let cup = { name: 'Big Cup', description: 'a new cup' };
        let updatedCup = { name: 'Big Blue Cup', description: 'a new cup' };

        axios.post(url, cup)
        .then((response) => {
            axios.put(`${url}/${response.data._id}`, updatedCup)
            .then((response) => {
                expect(response.data.name).to.contain("Big Blue Cup")
                done()
            })  
        })
        .catch((error) => done(error));
        done();
    })

    it('Add a controler to update a product @route-update', (done) => {
        let cup = { name: 'Big Cup', description: 'a new cup' };
        let updatedCup = { name: 'Big Blue Cup', description: 'a new cup' };

        axios.post(url, cup)
        .then((response) => {
            axios.put(`${url}/${response.data._id}`, updatedCup)
            .then((response) => {
                expect(response.data.name).to.contain("Big Blue Cup")
                done()
            })  
        })
        .catch((error) => done(error));
        done();
    })
})
