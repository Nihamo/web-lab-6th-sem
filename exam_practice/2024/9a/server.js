const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'views','home.html'));
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','register.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'));
});

app.listen(3005);