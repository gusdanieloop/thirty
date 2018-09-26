var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'thirty'
    });
}

module.exports = function() {
    return createDBConnection;
}
