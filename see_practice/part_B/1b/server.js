const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const app = express();
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
const dbName = 'mydb';
let db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // to serve HTML

// Connect to MongoDB
client.connect().then(() => {
  db = client.db(dbName);
  console.log('Connected to MongoDB');
});

// Serve the HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST - Add a new complaint
app.post('/complaints', async (req, res) => {
  const { complaint_id, username, issue, status } = req.body;
  const result = await db.collection('complaints').insertOne({ complaint_id, username, issue, status });
  res.send('Complaint submitted successfully');
});

// PUT - Update complaint status by Complaint ID
app.put('/complaints/:id', async (req, res) => {
  const complaint_id = req.params.id;
  const newStatus = req.body.status;

  const result = await db.collection('complaints').updateOne(
    { complaint_id: complaint_id },
    { $set: { status: newStatus } }
  );

  res.send('Complaint status updated');
});

// GET - Retrieve all pending complaints
app.get('/complaints/pending', async (req, res) => {
  const result = await db.collection('complaints').find({ status: 'Pending' }).toArray();
  res.json(result);
});

app.get('/complaints/all', async (req, res) => {
  const result = await db.collection('complaints').find().toArray();
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});