const express = require("express");
const hbstempl=require('express-handlebars');
var app=express();
var HTTP_PORT = process.env.PORT||3000;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('profiledocuments')); 

app.get("/",(req,res)=>{
  res.sendFile( __dirname+ '/index.html',{layout:false})
})

app.get("/index",(req,res)=>{
  res.sendFile( __dirname+ '/index.html',{layout:false})
})


app.get("/projects",(req,res)=>{
  res.sendFile( __dirname+ '/projects.html',{layout:false})
})

app.get("/test",(req,res)=>{
  res.sendFile( __dirname+ '/test.html',{layout:false})
})

app.listen(HTTP_PORT, onHttpStart);

