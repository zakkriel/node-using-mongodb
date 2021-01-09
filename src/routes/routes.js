import { addnewProdcut} from '../controllers/controllers';


const routes = (app) => {
    app.route('/products')
        
        .post(addnewProduct);
}

export default routes;