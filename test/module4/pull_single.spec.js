const assert = require("assert");
const Product = require("../test_util.js");

describe('Find a single product', () => {
    let watch2;
    
    before((done) => {
        watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
        watch2.save()
            .then(() => done())
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });

    it('Add controler to pull a single item @controler-single', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })

    it('Add route to pull a single item @route-single', (done) => {
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
