import {Client, Pool} from "pg"

export const db = new Pool({
  connectionString: "postgres://postgres:dev@localhost:5432/tasks"
});



export async  function  seed() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY ,
      title TEXT,
      done BOOLEAN DEFAULT FALSE
    );

    
  `;
  await db.query(createTableSql);
  console.log("Table created successfully.")

  const result  = await db
  .query("SELECT COUNT(*) AS count FROM tasks") 
  const count = Number(result.rows[0].count);

  if (count === 0) {
    await db.query(`INSERT INTO tasks (title, done)
    VALUES ('Buy Eggs', FALSE),('Buy Bread', FALSE),('DO Homework', FALSE)
    ;`);
  }
  console.log("DB seeded successfully.")

  const rows = await db.query(`SELECT * FROM tasks`);
  console.log(rows);
}

