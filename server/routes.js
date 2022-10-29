const express = require('express');

const pool = require("./db");
const catchAsync = require('./catchAsync');

const router = express.Router();

// create a todo
router.post("/todos", catchAsync(async (req, res) => {
    const { description } = req.body;
    const newTodo = await pool.query(
        `INSERT INTO todo (description) VALUES($1) RETURNING *`, 
        [description]
    );
    
    res.json(newTodo.rows[0]);
}));

// get all todo
router.get("/todos", catchAsync(async (req, res) => {
    const allTodo = await pool.query(
        "SELECT * FROM todo"
    );
    
    res.json(allTodo.rows);
}));

// get a todo
router.get("/todos/:id", catchAsync(async (req, res) => {
    const todo = await pool.query(
        `SELECT * FROM todo WHERE todo_id=${req.params.id}`
    );
    
    res.json(todo.rows[0]);
}));

// update a todo
router.put("/todos/:id", catchAsync(async (req, res) => {
    const { description } = req.body;
    const { id } = req.params;

    const updateTodo = await pool.query(
        `UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *`,
        [description, id]
    );

    res.json(updateTodo.rows[0]);
}));

// delete a todo
router.delete("/todos/:id", catchAsync(async (req, res) => {
    const todo = await pool.query(
        `DELETE FROM todo WHERE todo_id = ${req.params.id} RETURNING *`
    );
    
    res.json(todo.rows[0]);
}));

module.exports = router;