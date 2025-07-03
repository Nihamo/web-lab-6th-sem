const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const uri = 'mongodb://127.0.0.1:27017';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add-employee', async (req, res) => {
  const { emp_name, email, phone, hire_date, job_title, salary } = req.query;
  const parsedSalary = parseFloat(salary);

  const client = await MongoClient.connect(uri);
  const db = client.db('HR');
  const employees = db.collection('employees');
  await employees.insertOne({emp_name, email, phone, hire_date, job_title,salary: parsedSalary});
  const result = await employees.find({ salary: { $gt: 50000 } }).toArray();

  res.send(result);
  await client.close();
});

app.listen(3000);
