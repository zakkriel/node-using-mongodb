import { addnewProdcut} from '../controllers/controllers';
import { ProductSchema } from '../models/models';

const routes = (app) =>{
    app.route('/products')
    //Post endpoint
    .post(addnewProdcut);
}

export default routes;