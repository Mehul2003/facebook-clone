const { MongoClient } = require('mongodb');

let dbConnection;

function connectToDB(cb) {
    MongoClient.connect("mongodb://localhost:27017/facebook-clone")
        .then((client) => {
            dbConnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err);
            return cb(err);
    });
}

function getDB() {
    return dbConnection;
}


module.exports = {
    connectToDB,
    getDB
};