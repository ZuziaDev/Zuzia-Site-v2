var click = false;
var modclick = false;
var setclick = false;
var genelclick = false;
var funclick = false;
var rpclick = false;
function preloader(){
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "0";
},2000);
setTimeout(()=>{
document.querySelector(".screen").style.display = "none";  
},2500)
}
function navbar(){
if(click==false){
document.querySelector(".list").style.display = "block";
document.querySelector(".list").style.height = "100vh";
click = true;
} else {
document.querySelector(".list").style.display = "none";
click = false;
}
}
function mod(){
document.querySelector(".screen").style.display = "block";
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "1";  
},20);
if(modclick == false){
setTimeout(()=>{
document.querySelector("#mod-btn").innerHTML = "-";
document.querySelector("#mod").style.display = "block";  
modclick = true;
},500);
setTimeout(()=>{
document.querySelector("#mod").style.opacity = "1";
document.querySelector(".screen").style.display = "none";
},510);
} else {
setTimeout(()=>{
document.querySelector("#mod-btn").innerHTML = "+";
document.querySelector("#mod").style.opacity = "0";
},500);
setTimeout(()=>{
document.querySelector("#mod").style.display = "none";
document.querySelector(".screen").style.display = "none";
},1000);
modclick = false;
}
}
function set(){
document.querySelector(".screen").style.display = "block";
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "1";  
},20);
if(setclick == false){
setTimeout(()=>{
document.querySelector("#set-btn").innerHTML = "-";
document.querySelector("#set").style.display = "block";  
setclick = true;
},500);
setTimeout(()=>{
document.querySelector("#set").style.opacity = "1";
document.querySelector(".screen").style.display = "none";
},510);
} else {
setTimeout(()=>{
document.querySelector("#set-btn").innerHTML = "+";
document.querySelector("#set").style.opacity = "0";
},500);
setTimeout(()=>{
document.querySelector("#set").style.display = "none";
document.querySelector(".screen").style.display = "none";
},1000);
modclick = false;
}
}
function genel(){
document.querySelector(".screen").style.display = "block";
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "1";  
},20);
if(genelclick == false){
setTimeout(()=>{
document.querySelector("#genel-btn").innerHTML = "-";
document.querySelector("#genel").style.display = "block";  
genelclick = true;
},500);
setTimeout(()=>{
document.querySelector("#genel").style.opacity = "1";
document.querySelector(".screen").style.display = "none";
},510);
} else {
setTimeout(()=>{
document.querySelector("#genel-btn").innerHTML = "+";
document.querySelector("#genel").style.opacity = "0";
},500);
setTimeout(()=>{
document.querySelector("#genel").style.display = "none";
document.querySelector(".screen").style.display = "none";
},1000);
genelclick = false;
}
}
function fun(){
document.querySelector(".screen").style.display = "block";
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "1";  
},20);
if(funclick == false){
setTimeout(()=>{
document.querySelector("#fun-btn").innerHTML = "-";
document.querySelector("#fun").style.display = "block";  
funclick = true;
},500);
setTimeout(()=>{
document.querySelector("#fun").style.opacity = "1";
document.querySelector(".screen").style.display = "none";
},510);
} else {
setTimeout(()=>{
document.querySelector("#fun-btn").innerHTML = "+";
document.querySelector("#fun").style.opacity = "0";
},500);
setTimeout(()=>{
document.querySelector("#fun").style.display = "none";
document.querySelector(".screen").style.display = "none";
},1000);
funclick = false;
}
}
function rp(){
document.querySelector(".screen").style.display = "block";
document.querySelector(".screen").style.position = "fixed";
setTimeout(()=>{
document.querySelector(".screen").style.opacity = "1";  
},20);
if(rpclick == false){
setTimeout(()=>{
document.querySelector("#rp-btn").innerHTML = "-";
document.querySelector("#rp").style.display = "block";  
rpclick = true;
},500);
setTimeout(()=>{
document.querySelector("#rp").style.opacity = "1";
document.querySelector(".screen").style.display = "none";
},510);
} else {
setTimeout(()=>{
document.querySelector("#rp-btn").innerHTML = "+";
document.querySelector("#rp").style.opacity = "0";
},500);
setTimeout(()=>{
document.querySelector("#rp").style.display = "none";
document.querySelector(".screen").style.display = "none";
},1000);
rpclick = false;
}
}
//Scroll
window.onscroll = function() {
if (document.documentElement.scrollTop > 50){
document.getElementById("logo").style.fontSize = "22px";
} else {
document.getElementById("logo").style.fontSize = "26px";
}
}
function swa(){
window.location.href = "https://discord.gg/r7AZnbHXBS";
}
function swb(){
window.location.href = "https://discord.gg/ZuwQt8CdMQ";
}
function swc(){
window.location.href = "https://discord.gg/cM98zENxN6";
}
//sağtık engel
function IE(e) {
     if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
          alert('SAĞ TIKLAMA ENGELİ');
          return false;
     }
}
function NS(e) {
     if (document.layers || (document.getElementById && !document.all)) {
          if (e.which == "2" || e.which == "3") {
               alert('Sitemizin kod ve resimlerinin korunması amacıyla sağ tıklama engellenmiştir. Anlayışınız için teşekkür ederiz.');
               return false;
          }
     }
}
document.onmousedown=IE;document.onmouseup=NS;document.oncontextmenu=new Function("return false");

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WRJ6K8JPZP');