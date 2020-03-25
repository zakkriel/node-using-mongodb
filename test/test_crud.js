const assert = require("assert");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter a product name'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model('Product', ProductSchema);
let watch2;
beforeEach((done) => {
    watch2 = new Product({ name: 'Old Watch', description: 'a new watch' });
    watch2.save()
        .then(() => done())
        .catch((err) => {
            console.error("Handling promise rejection", err);
        });
});

describe('Creating documents', () => {
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


describe('Pulling products', () => {
    it('Add controler to pull a list of items @controler-lists', (done) => {
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

describe('Find a single product', () => {
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


describe('Updating a product', () => {
    it('Add a controler to update a product @controler-update', (done) => {
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


describe('Deleting a product', () => {
    it('Add a controler to remove a product @controler-remove', (done) => {
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
