const express = require('express');
const app=express();
const path = require('path');
const { MongoClient,ObjectId }=require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
let db;
let collection;

client.connect().then(()=>{
    db = client.db('mydb');
    collection = db.collection('student');
    console.log("connected to mongodb");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/submit',async (req,res)=>{
    try{
        await collection.insertOne(req.body);
        res.send("inserted successfully");
    }catch(err){
        res.status(500).send("error in inserting");
    }
});

app.get('/display',async (req,res)=>{
    try{
        const results = await collection.find().toArray();
        let html = "<ul>"
        results.forEach(s=>{
            html+= `<li>${s.name}-${s.usn}-${s.dept}-${s.grade}</li>`;
        });
        html+="</ul>";
        res.send(html);
    }catch(err){
        res.status(500).send("error in displaying");
    }
});

app.put('/update',async (req,res)=>{
    const name = req.body.name;
    const grade = req.body.grade;
    try{
        const output = collection.updateMany({name:name},{$set:{grade:grade}});
        res.send(`${output.modifiedCount} records updated`);
    }catch(err){
        res.status(500).send("error in updating");
    }
});

app.listen(3003,()=>{
    console.log("server started at port 3003");
});