import express from 'express';
import db from './db/db';

//set up express api
const app = express();

//get all todos
app.get('/api/v1/todos', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message:'todo retrieves successfully',
        todos:db
    })
});

const PORT = 5000;

app.listen(PORT, () =>{
    console.log('server running on port ${PORT}')
});