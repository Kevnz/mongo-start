var env = process.env.NODE_ENV || 'test';

var qconf = require('qconf'),
    config = qconf({},['file://config/config.json', 'file://config/config.'+ env + '.json']);

module.exports = function (collection) {
    var mongojs = require('mongojs');
    var db = mongojs(config.get('mongo-connection'));
    return db.collection(collection);
};