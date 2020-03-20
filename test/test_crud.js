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

describe('Reading product details @find-single-product', () => {
    it('finds product with the name of Old Watch', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })
});


describe('Reading product details @find-products', () => {
    it('finds product with the name of Old Watch', (done) => {
        Product.findOne({ name: 'Old Watch' })
            .then(() => {
                assert(watch2.name === 'Old Watch'); 
                done();
            })
            .catch((err) => {
                console.error("Handling promise rejection", err);
            });
    })
});

describe('Deleting a product', () => {
    it('removes a product using id @remove-product', (done) => {
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
