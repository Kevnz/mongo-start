var config = require('xtconf');

module.exports = function (collection) {
    var mongojs = require('mongojs');
    var db = mongojs(config.get('mongo-connection'));
    return db.collection(collection);
};