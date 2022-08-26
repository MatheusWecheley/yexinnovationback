const mongoose = require('mongoose');
mongoose.Promise = Promise;

export default mongoose.connect('mongodb://localhost/1_0', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to Mongoose Sucess!'))
.catch((err) => console.error(err))

