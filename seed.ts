import Database from "better-sqlite3";

export const db = new Database("tasks.db");

export function seed() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      done INTEGER DEFAULT 0
    );

    
  `;
  db.exec(createTableSql);

  const { count } = db
  .prepare("SELECT COUNT(*) AS count FROM tasks")
  .get() as { count: number };
  if (count === 0) {
    db.exec(`INSERT INTO tasks (title, done)
    VALUES ('Buy Eggs', 0),('Buy Bread', 0),('DO Homework', 0)
    ;`);
  }

  const rows = db.prepare(`SELECT * FROM tasks`).all();
  console.log(rows);
}
