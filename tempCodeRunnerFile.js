const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'veronika17',
    database: 'weblab5',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});