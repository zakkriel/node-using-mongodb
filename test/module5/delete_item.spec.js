const expect = require("expect.js");
const axios = require("axios");

describe('Deleting a product', () => {
    const url = 'http://localhost:4000/products';

    it('Add a controler to remove a product @controller-remove', (done) => {
        let belt = { name: 'New belt', description: 'a new belt' };
        
        axios.post(url, belt)
        .then((response) => {
            axios.delete(`${url}/${response.data._id}`)
            .then((response) => {
                expect(response.data.message).to.be("successfully deleted product")
            })
            done();
        })
        .catch((error) => done(error));
        
    })

    it('Add a route to remove a product @route-remove', (done) => {
        let shoes = { name: 'New Shoes', description: 'new shoes' };
        
        axios.post(url, shoes)
        .then((response) => {
            axios.delete(`${url}/${response.data._id}`)
            .then((response) => {
                expect(response.data.message).to.be("successfully deleted product")
            })
            done();
        })
        .catch((error) => done(error));
    })
})
