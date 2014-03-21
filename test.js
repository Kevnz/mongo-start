
var test = require("tap").test


test("Make sure mongo collection is a collection", function (t) {
    var testDB = require('./index')('test'); 
    testDB.find(function(err, docs) {
        t.notOk(err, "no error"); 
        t.ok(docs.length > 0, "should return multiple items");
        t.end();
    });
});

test("Should return db instance if no collection is passed" , function (t) {

	var db = require('./index')(); 
	t.ok(db, "Should be there");
	t.type(db.collection, "function", "db should have a collection function");
	t.end();
});