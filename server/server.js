const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const verb = require('./routes/verb');
const db_uri = "mongodb+srv://danielwallin:carp3di3m@cluster0-xh9nc.mongodb.net/test?retryWrites=true";

// initialize our express app
const mongoDB = process.env.MONGODB_URI || db_uri;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', verb.createVerb);
app.use('/api', verb.getVerbs);

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});