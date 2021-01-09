import { addnewProdcut} from '../controllers/controllers';


const routes = (app) =>{
    app.route('/products')
    //Post endpoint
    .post(addnewProdcut);
}

export default routes;