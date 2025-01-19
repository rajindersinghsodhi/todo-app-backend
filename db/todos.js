const {connectToDatabase} = require('./connect.js');
const {ObjectId} = require('mongodb')


async function addTodo(todo){
    const db = await connectToDatabase();
    const collection = db.collection("todos");
    const result = await collection.insertOne({"todo": todo});
    return result.acknowledged;
}

async function getTodos(){
    const db = await connectToDatabase();
    const collection = db.collection("todos");
    const todos = collection.find({}).toArray();
    return todos;
}

module.exports = {addTodo, getTodos};