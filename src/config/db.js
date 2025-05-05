const sqlite3 = require('sqlite3').verbose();
const dbPath = __dirname + '/../../data/database.sqlite';
const db = new sqlite3.Database(dbPath);

const initSql = `
CREATE TABLE IF NOT EXISTS tenders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  institution TEXT,
  description TEXT,
  start_datetime TEXT,
  end_datetime TEXT,
  max_budget REAL
);
CREATE TABLE IF NOT EXISTS offers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tender_id INTEGER,
  name TEXT,
  amount REAL,
  submitted_at TEXT,
  FOREIGN KEY(tender_id) REFERENCES tenders(id)
);
`;
db.exec(initSql);
module.exports = db;