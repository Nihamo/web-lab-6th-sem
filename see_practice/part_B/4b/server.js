const express = require('express');
const app = express();
const path = require('path');
const { MongoClient,ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
let db;
let collection;

client.connect().then(()=>{
    db=client.db('mydb');
    collection = db.collection("internship");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/submit',async (req,res)=>{
    try{await collection.insertOne(req.body);
    res.send("inserted successfully");}
    catch(err){
        res.send("error in inserting");
    }
});

app.get('/infosys',async (req,res)=>{
    try{
        const result = await collection.find({company:"infosys"}).toArray();
        let output="<h3>student interning in infosys:<h3><ul>";
        result.forEach(s=>{
            output+=`<li>${s.id}-${s.name}-${s.company}-${s.duration}-${s.status}`;
        });
        output+="</ul>";
        res.send(output);
    }catch(err){
        res.send("error in fetching");
    }
});

app.put('/updateStatus',async (req,res)=>{
    const id = req.body.id;
    try{
        const result = await collection.updateMany({id:id},{$set:{status:"completed"}});
        res.send(`${result.modifiedCount} enrollments has been completed`);
    }catch(err){
        res.status(500).send("error in updating status");
    }
});

app.listen(3003,()=>{
    console.log("server is running on port 3003");
});

