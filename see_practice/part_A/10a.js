const express = require('express');
const app = express();
const port = 3003;

const visits={};

app.use((req,res,next)=>{
    const now = new Date();
    console.log(`[${now.toISOString()}]: ${req.method} ${req.url}`);
    next();
});

app.use((req,res,next)=>{
    const ip = req.ip;
    visits[ip]=(visits[ip] || 0)+1;
    req.visitCount = visits[ip];
    next();
});

app.get('/',(req,res)=>{
    res.send(`welcome to the page, you have visited this page for ${req.visitCount} times`);
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});