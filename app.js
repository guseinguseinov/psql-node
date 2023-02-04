import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import pool from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

import path from 'path';
import { fileURLToPath } from 'url';
import todoRoute from "./routes/todo.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config({ path: path.resolve(__dirname, ".env") })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(todoRoute);

app.use(errorHandler);

export default app;