const assert = require("assert");
const Product = require("../test_util.js");

describe('Deleting a product', () => {
    let watch2;
    
    before((done) => {
        watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
        watch2.save()
            .then(() => done())
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });

    it('Add a controler to remove a product @controller-remove', (done) => {
        let belt = new Product({ name: 'New belt', description: 'a new belt' });
        belt.save();
        Product.findOneAndDelete({_id: belt._id})
        .then((product) => {
            assert(product === null);
        })
        .catch((err) => {
            console.error("Handling promise rejection", err);
        })
        done();
    })

    it('Add a route to remove a product @route-remove', (done) => {
        let belt = new Product({ name: 'New belt', description: 'a new belt' });
        belt.save();
        Product.findOneAndDelete({_id: belt._id})
        .then((product) => {
            assert(product === null);
        })
        .catch((err) => {
            console.error("Handling promise rejection", err);
        })
        done();
    })
})
