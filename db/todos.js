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

async function updateTodo(id, todo){
    const db = await connectToDatabase();
    const collection = db.collection("todos");
    const result = await collection.updateOne({_id: new ObjectId(id) }, {$set: {"todo": todo}})
    return result.modifiedCount > 0;
}

module.exports = {addTodo, getTodos, updateTodo};