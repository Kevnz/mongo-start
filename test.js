
var test = require("tap").test
var mock_xtconf = function (){
    console.log('mock mock_xtconf')
    return {
        get:function () {
            console.log('mock get')
            return "configstring";
        }
    }
};
var mock_mongojs = function (c) {
    console.log('mock mongo');
 
        if (c) {
            console.log('mock collection');

            var obj = {
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
            console.log(obj);

        return obj;
 
    } else {
        return {};
    }
} 
var proxyquire =  require('proxyquire');


test("mongo-start tests", function(te) {

        module = proxyquire("./index.js", { 'mongojs': mock_mongojs, 'xtconf': mock_xtconf});

    test("Make sure mongo collection is a collection", function (t) {
        t.plan(2);
        console.log('Make sure mongo collection is a collection')
        console.log(module);
        var testDB = module('test'); 

        testDB.find(function(err, docs) {
            t.notOk(err, "There should be no error"); 
            t.ok(docs.length > 0, "should return none empty items");
            t.end();
        });
    });

    test("Should return db instance if no collection is passed" , function (t) {
        t.plan(2);
        var testDB = module(); 
    	t.ok(testDB, "Should be there");
    	t.type(testDB.collection, "function", "db should have a collection function");
    	t.end();
    });

    te.end();
})