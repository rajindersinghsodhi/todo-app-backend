const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT

app.use(express.json());

app.get('/', async (req, res) => {
    try{
        console.log("runnng");
        res.status(200).json({message: 'server is running'});
    }catch(err){
        console.log(err);   
        res.status(500).jsong({
            message: 'something went wrong', 
            error: err
        })
    }
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);  
});