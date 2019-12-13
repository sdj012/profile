const express = require("express");
const hbstempl=require('express-handlebars');
var app=express();
var HTTP_PORT = process.env.PORT||3000;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.engine('.hbs',hbstempl({extname:'.hbs'}))
app.set('views',__dirname+'/views');
app.set('view engine','.hbs');
app.use(express.static('profiledocuments')); 

app.get("/",(req,res)=>{
  res.render('index',{layout:false})
})

app.listen(HTTP_PORT, onHttpStart);