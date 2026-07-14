import { Router } from "express";
import { allTasks, createTask, singleTask } from "../controllers/task.conntroller.js";

const taskRouter = Router();

taskRouter.route("/").get(allTasks)
taskRouter.route("/").post(createTask)
taskRouter.route("/:id").get(singleTask)

export {taskRouter};