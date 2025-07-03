const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const uri = 'mongodb://127.0.0.1:27017';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/submit', async (req, res) => {
  const { name, branch, semester } = req.query;
  const sem = parseInt(semester);
  const client = await MongoClient.connect(uri);
  const db = client.db('mydb');
  const collection = db.collection('sem');

  await collection.insertOne({ name, branch, semester: sem });
  const result = await collection.find({ branch: /cse/i, semester: 6 }).toArray();
  await client.close();

  res.send(result);
});

app.listen(3000);