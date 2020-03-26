const axios = require("axios");
const expect = require("expect.js");

describe('Creating documents', () => {
    const url = 'http://localhost:4000/products';

    it('Create the model and schema @model-create', (done) => {
        let watch = { name: 'Old Watch', description: 'a new watch' };
        
        axios.post(url, watch)
        .then((response) => {
            expect(response.data.name).to.contain("Old Watch");
            done();
        })
        .catch((error) => done(error));
    })

    it('creates controler for route @controller-create', (done) => {
        let watch = { name: 'Old Watch', description: 'a new watch' };
        
        axios.post(url, watch)
        .then((response) => {
            expect(response.data.name).to.contain("Old Watch");
            done();
        })
        .catch((error) => done(error));
    })

    it('creates a new product @route-create', (done) => {
        let watch = { name: 'Old Watch', description: 'a new watch' };
        
        axios.post(url, watch)
        .then((response) => {
            expect(response.data.name).to.contain("Old Watch");
            done();
        })
        .catch((error) => done(error));
    });
});

