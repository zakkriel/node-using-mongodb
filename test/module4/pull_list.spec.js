const assert = require("assert");
const Product = require("../test_util.js");

describe('Pulling products', () => {
    let watch2;
    
    before((done) => {
        watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
        watch2.save()
            .then(() => done())
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });

    it('Add controler to pull a list of items @controller-lists', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })

    it('Add route to pull a list of items @route-lists', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });
});
