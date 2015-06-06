var config = require('xtconf')();

module.exports = function (collection) {
    var mongojs = require('mongojs');
    var connectionString = config.get('mongo-connection');
    if (connectionString === undefined) {
        throw new Error('No connection string is defined');
    }
    var db = mongojs(config.get('mongo-connection'));
    return typeof collection === "string" ? db.collection(collection) : db;
};

module.exports.mongojs = require('mongojs');