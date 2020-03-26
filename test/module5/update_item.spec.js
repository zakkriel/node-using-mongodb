const assert = require("assert");
const Product = require("../test_util.js");

describe('Updating a product', () => {
    let watch2;
    
    before((done) => {
        watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
        watch2.save()
            .then(() => done())
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });

    it('Add a controler to update a product @controller-update', (done) => {
        Product.findOneAndUpdate({name: 'Old Watch'}, {name: 'Updated Watch'}, { new: true, useFindAndModify: false })
        .then((product) => {
            assert(product.name === 'Updated Watch'); 
        })
        .catch((err) => {
            console.error("Handling promise rejection", err);
        })
        done();
    })

    it('Add a controler to update a product @route-update', (done) => {
        Product.findOneAndUpdate({name: 'Old Watch'}, {name: 'Updated Watch'}, { new: true, useFindAndModify: false })
        .then((product) => {
            assert(product.name === 'Updated Watch'); 
        })
        .catch((err) => {
            console.error("Handling promise rejection", err);
        })
        done();
    })
})
