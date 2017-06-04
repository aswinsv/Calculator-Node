var options = {
    host: 'localhost',// Host name for database connection. 
    port: 3306,// Port number for database connection. 
    user: 'root',
    password: 'password',
    database: 'eDiss',// Name of the database 
    checkExpirationInterval: 900000,// frequency of clearing expired sessions
    createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist. 
    connectionLimit: 10,// Number of connections when creating a connection pool 
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};

module.exports=options;