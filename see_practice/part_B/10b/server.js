const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const uri = 'mongodb://127.0.0.1:27017';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/insert', async (req, res) => {
  const { id,team,title,domain,funding } = req.query; 
  const client = await MongoClient.connect(uri);
  const collection = client.db('mydb').collection('startup');
  const parsedFund = parseFloat(funding);
  
  await collection.insertOne({ id,team,title,domain,funding: parsedFund });
  const result = await collection.find({domain:"edtech" , funding: {$gte: 500000}}).toArray();
  await client.close()
  res.send(result)
})

app.listen(3000)
