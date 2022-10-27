//Package
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require("path");
const fs = require('fs');
const events = require('events');

const EventEmitter = require('events').EventEmitter;
const em = new EventEmitter();
//View Engine 
const ejs = require("ejs");
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
//Body-parse 
app.use(bodyParser.json())
.use(bodyParser.urlencoded({
extended: true
}));
//Statik
app.use(express.static('public'));
app.set("views", "path/to/views");
//Bot bilgi
const { Database } = require("nukleon");
let db = new Database("./data/zuzia1.json");
let sdb = new Database("./data/zuzia2.json");
let adb = new Database("./data/zuzia3.json");
let ms = new Database("./data/zuzia4.json");
let avt = new Database("./data/zuzia5.json");
var sunucu = db.get("sunucu");
var uye = sdb.get("uye");
var kanal = adb.get("kanal");
var ping = ms.get("ping");
var av = avt.get("avatar")

//Sayfalar
app.get('/',(req,res)=>{
res.render(__dirname + '/views/index.ejs',{uye,kanal,sunucu,ping,avt,av});
});
app.get('/davet',(req,res)=>{
res.render(__dirname + '/views/davet.ejs');
});
app.get('/destek',(req,res)=>{
res.render(__dirname + '/views/destek.ejs');
});


//Server listen
const port = 8080
app.listen(port , () => {
console.log(port, "portu ile aktif ");
});