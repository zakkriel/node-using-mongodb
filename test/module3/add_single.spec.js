const assert = require("assert");
const Product = require("../test_util.js");

describe('Creating documents', () => {
    let watch2;
    
    before((done) => {
        watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
        watch2.save()
            .then(() => done())
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });

    it('Create the model and schema @create-model', (done) => {
        const watch = new Product({ name: 'New watch', description: 'a new watch' });
        watch.save()
            .then(() => {
                assert(!watch.isNew);
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })

    it('creates controler for route @create-controler', (done) => {
        const watch = new Product({ name: 'New watch', description: 'a new watch' });
        watch.save()
            .then(() => {
                assert(!watch.isNew);
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })

    it('creates a new product @create-product', (done) => {
        const watch = new Product({ name: 'New watch', description: 'a new watch' });
        watch.save()
            .then(() => {
                assert(!watch.isNew);
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    });
});

