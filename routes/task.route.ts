import { Router } from "express";
import { allTasks, createTask, singleTask, updateTask } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.route("/").get(allTasks)
taskRouter.route("/").post(createTask)
taskRouter.route("/:id").get(singleTask)
taskRouter.route("/:id").put(updateTask)

export {taskRouter};