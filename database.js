const mysql = require('mysql2');

// Створіть пул підключень до бази даних
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'veronika17',
    database: 'weblab5',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Підключіться до бази даних
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to the MySQL database.');

    // Створення таблиці heroes, якщо вона не існує
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS heroes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            power VARCHAR(255) NOT NULL,
            powersCount INT NOT NULL
        )
    `;

    connection.query(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "heroes" created or already exists.');
        }
        connection.release();
    });
});

module.exports = pool;