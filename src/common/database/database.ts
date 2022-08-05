const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose
  .connect('mongodb://localhost/1_0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongoose Success!'))
  .catch((err) => console.error(err));

export default { mongoose };
