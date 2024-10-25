const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Підключення до бази даних MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'veronika17',
    database: 'weblab5',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all heroes (Read)
app.get('/heroes', (req, res) => {
    pool.query('SELECT * FROM heroes', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});

// Create a new hero (Create)
app.post('/heroes', (req, res) => {
    const { name, power, powersCount } = req.body;
    pool.query('INSERT INTO heroes (name, power, powersCount) VALUES (?, ?, ?)', [name, power, powersCount], (error, results) => {
        if (error) {
            console.error('Error adding hero:', error);
            return res.status(500).send('Error adding hero');
        }
        res.json({ id: results.insertId, name, power, powersCount });
    });
});

// Update a hero (Update)
app.put('/heroes/:id', (req, res) => {
    const { id } = req.params;
    const { name, power, powersCount } = req.body;
    pool.query('UPDATE heroes SET name = ?, power = ?, powersCount = ? WHERE id = ?', [name, power, powersCount, id], (error) => {
        if (error) {
            console.error('Error updating hero:', error);
            return res.status(500).send('Error updating hero');
        }
        res.sendStatus(200);
    });
});

// Delete a hero (Delete)
app.delete('/heroes/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM heroes WHERE id = ?', [id], (error) => {
        if (error) {
            console.error('Error deleting hero:', error);
            return res.status(500).send('Error deleting hero');
        }
        res.send({ message: 'Hero deleted' });
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});