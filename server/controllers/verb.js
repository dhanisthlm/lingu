const Verb = require('../models/verb');

const verbController = {
  createVerb: function(req, res, next) {
    let verb = new Verb(req.body);

    console.log(req.body)
    verb.save(function (err) {
        if (err) {
            console.log(err)
            return next(err);
        }
        res.send('Product Created successfully')
    })
  },

  getVerbs: function(req, res, next) {
    Verb.find({}, function (err, verbs) {
        if (err) {
            console.log(err)
            return next(err);
        }
        console.log(verbs)
        res.send(verbs);
    })
  }
}

module.exports = verbController;