# Book Management App

Simple web app to manage books with SQLite database.

## Database Schema

```sql
CREATE TABLE Book (
    book_id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    price REAL
)
```

## API Endpoints

- **GET /books** - Get all books
- **POST /books** - Add new book

## Setup & Run

1. `npm install`
2. `npm start`
3. Open http://localhost:3000
