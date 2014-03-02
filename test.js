
var test = require("tap").test


test("Make sure mongo collection is a collection", function (t) {
    var testDB = require('./index')('test'); 
    testDB.find(function(err, docs) {
        t.notOk(err, "no error");
        console.log(docs.length);
        t.ok(docs.length > 0, "should return multiple items");
        t.end();
    });
});