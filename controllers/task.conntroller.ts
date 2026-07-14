import type { Request, Response } from "express";
import { tasks } from "./../constants.js";
import type { error } from "node:console";
export interface Task {
  id: Number;
  title: String;
  done: Boolean;
}

const taskList: Task[] = [...tasks];

export const allTasks = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Tasks fetched successfully.",
    tasks: taskList,
  });
};
export const singleTask = (req: Request, res: Response) => {
  const idStr = req.params.id;
  const id = Number(idStr);
  console.log(id);
  const task = taskList.filter((task) => {
    return task.id === id;
  });
  if (task.length < 1) {
    res.status(400).json({
      error: "Task not found.",
    });
    return
  }

  res.status(200).json({
    message: "Task fetched successfully.",
    tasks: task,
  });
};

export const createTask = (req:Request, res: Response)=>{
    console.log(req.body
    )
    const task = req.body;

    taskList.push({
        id: taskList.length + 1,
        title: task.title,
        done: false 
    })
    res.status(201).json({
        message: "Tak added successfully"
    })
}
