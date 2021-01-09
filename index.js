import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;
//moongose connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/productsdb', {
mongoose.connect('mongodb+srv://Admin:N0MrB0nd@cluster0.nbuzg.mongodb.net/productsdb', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
