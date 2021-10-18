const express = require('express');

const app = express(); 

app.get('/ping',(req,res)=>{
  res.send('pong')
})
app.get('/task',(req,res)=>{
  res.json([])
})

app.post('/task',(req,res)=>{
  res.json({})
})

module.exports = app; 