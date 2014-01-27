
var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
  name: String
, email: String
});

// need to clear these for testing
// https://github.com/LearnBoost/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

ModelSchema.plugin(require('../index'), [{email: /@/}, {_id: 'ObjectId'}, {name:'*'}]);
module.exports = mongoose.model('TestModel', ModelSchema);
