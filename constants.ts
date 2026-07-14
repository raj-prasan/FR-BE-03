import type { Task } from "./controllers/task.controller.js";

export const tasks : Task[] = [
  { id: 1, title: "Complete authentication API", done: false },
  { id: 2, title: "Fix login validation bug", done: true },
  { id: 3, title: "Write unit tests for user service", done: false },
  { id: 4, title: "Update project README", done: true },
  { id: 5, title: "Refactor database connection", done: false },
  { id: 6, title: "Implement JWT middleware", done: true },
  { id: 7, title: "Optimize API response time", done: false },
  { id: 8, title: "Deploy backend to Render", done: false },
  { id: 9, title: "Add request logging", done: true },
  { id: 10, title: "Review pull requests", done: false },
];