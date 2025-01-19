const {connectToDatabase} = require('./connect.js');
const {ObjectId} = require('mongodb')


async function addTodo(todo){
    const db = await connectToDatabase();
    const collection = db.collection("todos");
    const result = await collection.insertOne({"todo": todo});
    return result.acknowledged;
}

module.exports = {addTodo};