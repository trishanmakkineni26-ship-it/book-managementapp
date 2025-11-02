const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Database setup
const db = new sqlite3.Database(':memory:');
db.run('CREATE TABLE Book (book_id INTEGER PRIMARY KEY, title TEXT, author TEXT, price REAL)');

// GET /books
app.get('/books', (req, res) => {
    db.all('SELECT * FROM Book', (err, rows) => {
        res.json(rows);
    });
});

// POST /books
app.post('/books', (req, res) => {
    const { title, author, price } = req.body;
    db.run('INSERT INTO Book (title, author, price) VALUES (?, ?, ?)', 
        [title, author, price], function() {
        res.json({ id: this.lastID, title, author, price });
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
