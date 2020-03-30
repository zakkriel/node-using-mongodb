const fs = require('fs');
const expect = require('expect.js');

describe('Find a single product', () => {
    it('Add controler to pull a single item @controller-single', (done) => {
        expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("export const getProductWithID = (req, res) => {")
        expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("Product.findById(req.params.ProductID, (err, Product) => {")
        done();
    })

    it('Add route to pull a single item @route-single', (done) => {
        expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain("app.route('/products/:ProductID')")
        expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain(".get(getProductWithID)")
        done();
    })
});
