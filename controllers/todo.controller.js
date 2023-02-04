import pool from "../config/db.js";
import responseGenerate from "../utils/responseGenerator.js";


const todoController = {
    async createTodo(req, res) {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        return res.json(responseGenerate({ status: 200, message: null, data: newTodo.rows[0] }));
    },
    async getAlltodos(req, res) {
        const data = await pool.query("SELECT * FROM todo");
        return res.json(responseGenerate({ status: 200, message: "nese", data: data.rows }));
    },
    async getTodo(req, res) {
        const { id } = req.params;
        const data = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
        return res.json(responseGenerate({ status: 200, message: null, data: data.rows }));
    },
    async updateTodo(req, res) {
        const { id } = req.params;
        const { description } = req.body;

        const todo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        return res.json(responseGenerate({ status: 200, message: null, data: todo }));
    },
    async deleteTodo(req, res) {
        const { id } = req.params;

        const todo = await pool.query(`DELETE FROM todo WHERE todo_id = ${id}`);
        res.json(responseGenerate({ status: 200, message: "deleted", data: null }));
    }
};


export default todoController;