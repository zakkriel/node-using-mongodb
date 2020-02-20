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
        .then(() => done());
});

describe('Creating documents', () => {
    it('creates a new product', (done) => {
        const watch = new Product({ name: 'New watch', description: 'a new watch' });
        watch.save()
            .then(() => {
                assert(!watch.isNew);
                done();
            });
    });
});

describe('Reading product details', () => {
    it('finds product with the name of Old Watch', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            });
    })
});

describe('Deleting a product', () => {
    it('removes a product using id', (done) => {
        let belt = new Product({ name: 'New belt', description: 'a new belt' });
        belt.save();
        Product.findOneAndDelete(belt._id)
        .then(() => Product.findOne({ name: 'New belt' }))
        .then((product) => {
            assert(product === null);
            done();
        });

        done();
    })
})
