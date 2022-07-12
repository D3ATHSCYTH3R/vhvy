i7v=document.getElementById("i2").value;
localStorage.setItem("i7v");
ht=localStorage.getItem("i7v");
console.log("m");
function w1(){
    nm= localStorage.getItem("i1");
document.getElementById("hfu").innerHTML="WELCOME "+nm+"!";
}
function logout(){
    localStorage.removeItem("i1");
    window.location="1.html";
}

function save(){
    
}
function clear(){
    document.getElementById("i1").innerHTML="";
}

function m1(){
    Math.sqrt(1);
}

function m2(){
   Math.sqrt(2);
}

function m4(){
    Math.sqrt(3);
}

function m3(){
    Math.sqrt(4);
}

function m5(){
    Math.sqrt(5);
}

function m6(){
r=Math.sqrt(6);

document.getElementById("i2").innerHTML=r
}

function m7(){
    Math.sqrt(7);
}

function m8(){
    Math.sqrt(8);
}

function m9(){
    Math.sqrt(9);
}

function m10(){
    Math.sqrt(10);
}

function chaos(){
    ht=document.getElementById("i2").value;
if(ht==1){
    m1();
}
if(ht==2){
    m2();
}
if(ht==3){
    m3();
}
if(ht==4){
    m4();
}
if(ht==5){
    m5();
}
if(ht==6){
    m6();
}
if(ht==7){
    m7();
}
if(ht==8){
    m8();
}
if(ht==9){
    m9();
}
if(ht==10){
    m10();
}

}