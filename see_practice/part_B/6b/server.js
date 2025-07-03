const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const uri = 'mongodb://127.0.0.1:27017';

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/admit', async (req, res) => {
  const { Hospital_ID, Name, Location, Total_Beds, Occupied_Beds } = req.body;
  const client = await MongoClient.connect(uri);
  const collection = client.db('mydb').collection('hospitals');

  if (Name) {
    await collection.insertOne({ Hospital_ID, Name, Location, Total_Beds: parseInt(Total_Beds), Occupied_Beds: parseInt(Occupied_Beds),});
    res.send('Hospital data added');
  } else {
    await collection.updateOne({ Hospital_ID }, { $inc: { Occupied_Beds: 1 }});
    res.send('Patient admitted');
  }

  await client.close();
});

app.get('/critical', async (req, res) => {
  const client = await MongoClient.connect(uri);
  const collection = client.db('mydb').collection('hospitals');
  const result = await collection.find({ $expr: { $lt: [{ $subtract: ['$Total_Beds', '$Occupied_Beds'] }, 10] }}).toArray();
  await client.close();
  res.send(result);
});

app.listen(3000);