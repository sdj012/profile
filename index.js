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



function openCity(evt, cityName) {

  console.log("function hit")
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  return 0;
}

app.listen(HTTP_PORT, onHttpStart);