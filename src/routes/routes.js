import { addnewProduct,
        getProducts,
        getProductWithID,
        updateProduct,
        deleteProduct
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        .get(getProducts)
        
        // Post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')
        // get a specific Product
        .get(getProductWithID)

        // updating a specific Product
        .put(updateProduct)

        // deleting a specific Product
        .delete(deleteProduct);
}

export default routes;
