const {MongoClient, ServerApiVersion}  = require('mongodb');
require('dotenv').config();

const uri = process.env.URI

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connectToDatabase(){
    try{
        await client.connect();
        const db = client.db("todo-app");
        return db;
    }catch (err){
        console.log(err);
        throw err;
    }
}

module.exports = { client, connectToDatabase };