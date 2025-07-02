const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const path = require('path');

const uri = "mongodb://127.0.0.1:27017";

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/1b.html'));
});

app.get('/insert',async (req,res)=>{
    const {name, usn, scode, marks} = req.query;
    const parsedMarks = parseInt(marks);

    if (!usn || !name || !scode || isNaN(parsedMarks)) {
    return res.send('Invalid input');
  }

  let client;

  try{
    client = await MongoClient.connect(uri,{ useUnifiedTopology: true});
    const db = client.db('mydb');
    const collection = db.collection('student');

    await collection.insertOne({name,usn,scode,marks:parsedMarks});

    const lowscorer = await collection.find({marks:{$lt:20}}).toArray();

    console.log('students with score less than 20:',lowscorer);
    res.json(lowscorer);
  }catch(err){
    console.error("error:",err);
    res.status(500).send('internal server error');
  }finally{
    if(client){
        client.close();
    }
  }

});

app.listen(5005,()=>{
    console.log('listening on port 5005');
});