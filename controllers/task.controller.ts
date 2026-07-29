import type { Request, Response } from "express";
import { tasks } from "../constants.js";
import type { error } from "node:console";
export interface Task {
  id: Number;
  title: String;
  done: Boolean;
}
import { db } from "../seed.js";

const taskList: Task[] = [...tasks];

export const allTasks = (req: Request, res: Response) => {
  const { count } = db
  .prepare("SELECT COUNT(*) AS count FROM tasks")
  .get() as { count: number };
  if (count === 0) {
    res.status(200).json({
      message: "No tasks",
      tasks: null,
    });
  }
  const rows = db.prepare(`SELECT * FROM tasks`).all();
  res.status(200).json({
    message: "Tasks fetched successfully.",
    tasks: rows,
  });
};
export const singleTask = (req: Request, res: Response) => {
  const idStr = req.params.id;
  const id = Number(idStr);
  console.log(id);
  const task = db
    .prepare(
      `SELECT * FROM tasks WHERE 
    id = ?`,
    )
    .get(id) as any;

  if(task === undefined){
     res.status(404).json({
      error: "Tasks not found",
    });
  }
  res.status(200).json({
    message: "Task fetched successfully.",
    tasks: task,
  });
};

export const createTask = (req: Request, res: Response) => {
  console.log(req.body);
  const task = req.body;

  if (task.title == null) {
    res.status(400).json({
      error: "Please add the task.",
    });
    return;
  }
  const addTask = db.prepare(`INSERT INTO tasks(title)
    VALUES(?)`).run(task.title)

  res.status(201).json({
    message: "Tak added successfully",
    task: addTask,
  });
};

export const updateTask = (req: Request, res: Response) => {
  const idStr = req.params.id;
  const id = Number(idStr);
  const newTask = req.body;
  
  const found = db.prepare(`SELECT id from tasks WHERE id= ?`).get(id)
  if (!found) {
    res.status(404).json({
      message: "Failed",
    });
    return;
  }
  const updaedTask = db.prepare(`UPDATE tasks
    SET DONE = ?
    WHERE id = ?`).run(newTask.done, id)

  res.status(200).json({
    message: "done",
    task: updaedTask,
  });
};
