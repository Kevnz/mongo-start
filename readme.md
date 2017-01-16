[![Build Status](https://travis-ci.org/Kevnz/mongo-start.png?branch=master)](https://travis-ci.org/Kevnz/mongo-start)
Mongo-Start
=========

A simple mongojs wrapper to return a collection so you don't need to write the same thing over and over.

To configure the connection you can create an environment variable called "mongo-connection". However since mongo-start uses [qconf](https://www.npmjs.org/package/qconf) you can store the setting anywhere that qconf lets you.

```javascript
const users = require('mongo-start')('users'); //mongojs collection
users.find({...}, (err, collection) => {
  //do stuff
});
```

```javascript
const db = require('mongo-start')(); //mongojs db object
db.getCollectionNames((err, collectionNames) => {
  //collections in the db
});
```
