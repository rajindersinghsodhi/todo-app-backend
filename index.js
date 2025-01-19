const express = require('express');
const {addTodo} = require('./db/todos.js')
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

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);  
});