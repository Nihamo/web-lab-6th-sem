const express = require('express');
const app = express();

const visits={};

app.use((req,res,next) => {
    const now = new Date();
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use((req,res,next)=>{
    const ip = req.ip;
    visits[ip] = (visits[ip] || 0)+1;
    req.visitCount = visits[ip];
    next();
});

app.get('/',(req,res)=>{
    res.send(`you have visited this page for ${req.visitCount} times`);
});

app.listen(3005);