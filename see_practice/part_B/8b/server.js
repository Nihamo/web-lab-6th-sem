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
  const { id,name,price,discount,stock } = req.query; 
  const client = await MongoClient.connect(uri);
  const collection = client.db('mydb').collection('product');
  
  const parsedPrice = parseFloat(price);
  const parsedDiscount = parseFloat(discount);
  const finalPrice = parsedPrice - (parsedPrice * parsedDiscount / 100);
  
  await collection.insertOne({ id,name,price: parsedPrice, discount: parsedDiscount, stock, final:finalPrice });
  const result = await collection.find({final: {$lte: 1000}}).toArray();
  await client.close()
  res.send(result)
})

app.listen(3000)