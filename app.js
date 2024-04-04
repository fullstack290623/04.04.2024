
const mongoose = require('mongoose');

const dbURI = "mongodb://root:rootpassword@localhost:27022/node-auth?authSource=admin";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('Mongo connected ...');
    console.log(result.connection._connectionString)    
    //app.listen(3000, () => console.log(`Listening to port ${3000}`))
  })
  .catch((err) => console.log(err));