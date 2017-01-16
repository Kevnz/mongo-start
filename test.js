
const test = require('tap').test;

const fuxor = require('fuxor');

const mock_xtconf = function (){
  return {
    get:function () {
      return 'configstring';
    }
  }
};
const mock_mongojs = function (c) {
  if (c) {
    const obj = {
      collection: function () {
        return {
           find: function (callback) {
            callback(null, [0,1]);
           }
         }
      }
    }
    obj[c] = {
       find: function (callback) {
        callback(null, [0,1]);
       }
    };
    return obj;
  }
  return {};
}
fuxor.add({
  name: 'mongojs',
  result: mock_mongojs
});

fuxor.add({ name:'xtconf', result: mock_xtconf });

test('mongo-start tests', (te) => {

  let module = require('./index.js');

  test('Make sure mongo collection is a collection', (t) => {
    t.plan(2);
    const testDB = module('test');

    testDB.find(function(err, docs) {
      t.notOk(err, 'There should be no error');
      t.ok(docs.length > 0, 'should return none empty items');
      t.end();
    });
  });

  test('Should return db instance if no collection is passed', (t) => {
    t.plan(2);
    const testDB = module();
    t.ok(testDB, 'Should be there');
    t.type(testDB.collection, 'function', 'db should have a collection function');
    t.end();
  });

  te.end();
})
