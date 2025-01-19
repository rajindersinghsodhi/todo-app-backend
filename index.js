const express = require('express');
const {addTodo, getTodos} = require('./db/todos.js')
require('dotenv').config();

const app = express();
const port = process.env.PORT

app.use(express.json());

app.get('/', async (req, res) => {
    try{
        res.status(200).json({
            status: 'success',
            message: 'server is running'
        });
    }catch(err){
        res.status(500).json({
            status: 'error',
            message: 'something went wrong', 
            error: err
        })
    }
});

app.post('/todos', async (req, res) => {
    try{
        const todo_data = req.body;
        const result = await addTodo(todo_data.todo);
        if(result){
            return res.status(200).json({ 
                status: 'success',
                message: 'Todo added successfully'
            });
        }else{
            return res.status(500).json({ 
                status: 'error',
                message: 'Failed to add todo'
            });
        }
    }catch (err){
        return res.status(500).json({
            status: 'error',
            message: 'something went wrong', error: err
        })
    }
})

app.get('/todos', async (req, res) => {
    try{
        const todos = await getTodos();
        if(todos){
            return res.status(200).json({
                status: 'success',
                message: 'Todos fetched successfully', 
                todos: todos
            });
        }else{
            return res.status(500).json({
                status: 'error',
                message: 'Failed to fetch todos'
            });
        }
    }catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'something went wrong', error: err
        })
    }
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);  
});