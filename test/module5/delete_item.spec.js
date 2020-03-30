const fs = require('fs');
const expect = require('expect.js');

describe('Deleting a product', () => {
    it('Add a controler to remove a product @controller-remove', (done) => {
        expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {")
        expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("res.json({ message: 'successfully deleted product'});")
        done();
    })

    it('Add a route to remove a product @route-remove', (done) => {
        expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain(".delete(deleteProduct);")
        done();
    })
});
