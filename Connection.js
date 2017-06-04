var mysql = require('mysql');

var connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'eDiss',
    debug: false
});

module.exports = connectionPool