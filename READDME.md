# FR-BE-02

## Database

This project uses SQLite because it keeps the backend lightweight, requires no separate database server, and is a good fit for a small CRUD API that only needs simple local persistence.

The database file is stored at the project root as `tasks.db`.

## Start the project

Install dependencies first:

```bash
npm install
```

Then start the app in development mode:

```bash
npx tsx watch index.ts
```
