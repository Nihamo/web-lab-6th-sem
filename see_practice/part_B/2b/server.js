const express = require('express');
const app = express();
const path = require('path');
const uri='mongodb://127.0.0.1:27017';
const { MongoClient } = require('mongodb');


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/submit',async (req,res)=>{
    const client = await MongoClient.connect(uri);
    const collection = client.db('mydb').collection('fee');
    const {name,usn,sem,fee} = req.query;
    const parseFee = parseFloat(fee);

    await collection.insertOne({name,usn,sem,fee:parseFee});
    const deleted = await collection.deleteMany({fee:{$lte:0}});
    const remaining = await collection.find().toArray();

    let output = "<ul>";
    remaining.forEach(s=>{
        output+=`<li>${s.name}-${s.usn}-${s.sem}-${s.fee}</li>`
    });
    output += "</ul>"

    res.send(
        `<h3>${deleted.deletedCount} deleted</h3>
        <p>
            ${output}
        </p>
        `
    );
    await client.close();

});


app.listen(3003,()=>{
    console.log("server running in 3003");
});
