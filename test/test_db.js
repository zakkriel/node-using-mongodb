const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 
mongoose.connection
    .once('open', () => console.log('DB Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
});
