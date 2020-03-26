const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

describe("Mongo tests", function() {
    it("Database connected @mongo", function(done) {
        mongoose.connect('mongodb://localhost/productsdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }); 
        mongoose.connection
            .once('open', () => console.log('DB Connected!'))
            .on('error', (error) => {
                console.warn('Error : ',error);
        });
        done();
    });
});


