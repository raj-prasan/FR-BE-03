import Database from "better-sqlite3";

const db = new Database("tasks.db");

function seed() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      done INTEGER DEFAULT 0
    );

    INSERT INTO tasks (title, done)
    VALUES ('Buy Eggs', 0),('Buy Bread', 0),('DO Homework', 0)
    ;
  `;

  db.exec(createTableSql);

  const rows = db.prepare(`SELECT * FROM tasks`).all();
  console.log(rows);

  
}

seed();