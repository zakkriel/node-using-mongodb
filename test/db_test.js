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
