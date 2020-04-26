const config = require('./config/env'),
  mongoose = require('mongoose'),
  app = require('./config/express');
  // forms = require('./config/formHelper/initialForms');

//Connecting MongoDB using mongoose to our application
mongoose.connect(config.db, { useMongoClient: true });
mongoose.Promise = global.Promise;
//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

//This insert all forms to DB
// forms.insert();

//Express application will listen to port mentioned in our configuration
app.listen(config.port, function (err) {
  if (err) throw err;
  console.log("App listening on port " + config.port);
});