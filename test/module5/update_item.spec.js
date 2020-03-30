const fs = require('fs');
const expect = require('expect.js');

describe('Updating a product', () => {
    it('Add a controler to update a product @controller-update', (done) => {
        expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("Product.findOneAndUpdate({ _id: req.params.ProductID}, req.body, { new: true, useFindAndModify: false }, (err, Product)")
        done();
    })

    it('Add a controler to update a product @route-update', (done) => {
        expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain(".put(updateProduct)")
        done();
    })
});
