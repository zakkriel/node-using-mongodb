import { addnewProduct, deleteProduct, getProducts,  getProductWithID, updateProduct} from '../controllers/controllers';


const routes = (app) => {
    app.route('/products')
        .get(getProducts)
        .post(addnewProduct)



    app.route('/products/:ProductID')
        .get(getProductWithID)
        .put(updateProduct)
        .delete(deleteProduct);
}

export default routes;