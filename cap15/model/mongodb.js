let MongoClient = require('mongodb').MongoClient;

let mongoServer = 'mongodb://localhost:27017';

let state = {
    db: null
};

exports.connect = function(callback) {
    if (state.db) {
        return callback();
    }
    MongoClient.connect(mongoServer, function(err, client) {
        if (err) return callback(err);
        state.db = client.db('livro');
        callback();
    });
};

exports.get = function() {
    return state.db;
}

exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};