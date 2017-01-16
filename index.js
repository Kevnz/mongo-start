const config = require('xtconf')();
const mongojs = require('mongojs');

module.exports = function (collection) {
  const connectionString = config.get('mongo-connection');
  if (connectionString === undefined) {
    throw new Error('No connection string is defined');
  }
  const db = mongojs(config.get('mongo-connection'));
  return typeof collection === 'string' ? db.collection(collection) : db;
};

module.exports.mongojs = require('mongojs');
