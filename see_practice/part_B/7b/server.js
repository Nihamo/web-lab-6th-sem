const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 3000;
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'courseDB';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST route to insert enrollment
app.post('/enroll', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('enrollments');
    await collection.insertOne(req.body);
    res.send('Enrollment successful!');
  } catch (err) {
    res.status(500).send('Error enrolling student.');
  } finally {
    await client.close();
  }
});

// GET route to display all active enrollments
app.get('/active-enrollments', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('enrollments');
    const activeEnrollments = await collection.find({ status: "active" }).toArray();
    res.json(activeEnrollments);
  } catch (err) {
    res.status(500).send('Error fetching active enrollments.');
  } finally {
    await client.close();
  }
});

// PUT route to update status to "completed" by Student_ID or Course_Name
app.put('/complete', async (req, res) => {
  const { student_id, course_name } = req.body;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('enrollments');
    const filter = student_id ? { student_id } : { course_name };
    const result = await collection.updateMany(filter, { $set: { status: 'completed' } });
    res.send(`${result.modifiedCount} enrollment(s) updated to completed.`);
  } catch (err) {
    res.status(500).send('Error updating enrollment status.');
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});