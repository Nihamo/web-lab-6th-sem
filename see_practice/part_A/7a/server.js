const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <h1>Engg branches</h1><br>
        <ul>
        <li><a href='/ece'>(ece)</a></li>
        <li><a href='/me'>(me)</a></li>
        <li><a href='/cse'>(cse)</a></li>
        </ul>`);
});

app.get('/cse',(req,res)=>{
    res.sendFile(path.join(__dirname,'cse.html'));
});

app.get('/me',(req,res)=>{
    res.sendFile(path.join(__dirname,'me.html'));
});

app.get('/ece',(req,res)=>{
    res.sendFile(path.join(__dirname,'ece.html'));
});

app.listen(3003,()=>{
    console.log(`server is running in port 3003`);
});