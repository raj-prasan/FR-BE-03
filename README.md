# FR-BE-02

## Database

This project uses SQLite because it keeps the backend lightweight, requires no separate database server, and is a good fit for a small CRUD API that only needs simple local persistence.

The database file is stored at the project root as `tasks.db`.

## Start the project



```bash
docker run --name taskdb -e POSTGRES_PASSWORD=dev -e POSTGRES_DB=tasks -p 5432:5432 -v taskdata:/var/lib/postgresql/data -d postgres

```
