const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const uri = 'mongodb://127.0.0.1:27017';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/submit', async (req, res) => {
  const { name, usn, dept, attendance } = req.query;
  const attendanceNum = parseFloat(attendance);
  const client = await MongoClient.connect(uri);
  const db = client.db("mydb");
  const collection = db.collection("attendance");

  await collection.insertOne({ name, usn, dept, attendance: attendanceNum });
  const result = await collection.find({ attendance: { $lt: 75 } }).toArray();
  await client.close();

  res.send(result);
});

app.listen(3000);