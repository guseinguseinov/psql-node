import express from "express";
import todoController from "../controllers/todo.controller.js";
import catchError from "../utils/catchError.js";

const todoRoute = express.Router();

todoRoute.post('/', catchError(todoController.createTodo));
todoRoute.get('/', catchError(todoController.getAlltodos));
todoRoute.get('/:id', catchError(todoController.getTodo));
todoRoute.patch('/:id', catchError(todoController.updateTodo));
todoRoute.delete('/:id', catchError(todoController.deleteTodo));

export default todoRoute;