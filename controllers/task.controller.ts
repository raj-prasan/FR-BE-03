import type { Request, Response } from "express";
import { tasks } from "../constants.js";
import type { error } from "node:console";
export interface Task {
  id: Number;
  title: String;
  done: Boolean;
}
import { db } from "../seed.js";



export const allTasks = async (req: Request, res: Response) => {
  const {rows : [{count}]} = await db
  .query("SELECT COUNT(*) AS count FROM tasks")
  if (count === 0) {
    res.status(200).json({
      message: "No tasks",
      tasks: null,
    });
  }
  const {rows} = await db.query(`SELECT * FROM tasks`);
  res.status(200).json({
    message: "Tasks fetched successfully.",
    tasks: rows,
  });
};
export const singleTask = async (req: Request, res: Response) => {
  const idStr = req.params.id;
  const id = Number(idStr);
  console.log(id);
  const {rows : [task]} = await db
    .query(
      `SELECT * FROM tasks WHERE 
    id = $1`,[id]
    )
    

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

export const createTask = async(req: Request, res: Response) => {
  console.log(req.body);
  const task = req.body;

  if (task.title == null) {
    res.status(400).json({
      error: "Please add the task.",
    });
    return;
  }
  const addTask = await db.query(`INSERT INTO tasks(title)
    VALUES($1)`,[task.title])

  res.status(201).json({
    message: "Tak added successfully",
    task: addTask,
  });
};

export const updateTask = async(req: Request, res: Response) => {
  const idStr = req.params.id;
  const id = Number(idStr);
  const newTask = req.body;
  
  const found = db.query(`SELECT id from tasks WHERE id= $1`,[id])
  if (!found) {
    res.status(404).json({
      message: "Failed",
    });
    return;
  }
  const {rows : [updaedTask]} = await db.query(`UPDATE tasks
    SET DONE = $1
    WHERE id = $2`, [newTask.done, id])

  res.status(200).json({
    message: "done",
    task: updaedTask,
  });
};
