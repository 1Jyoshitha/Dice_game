var a = Math.floor(Math.random()*6+1);

var b = Math.floor(Math.random()*6+1);
var e = "/images/dice"+a+".png";
var f = "/images/dice"+b+".png";
var c = document.querySelector(".img1").setAttribute("src",e);
var d = document.querySelector(".img2").setAttribute("src",f);
var head = document.querySelector("h1");
if(a==b){
    head.textContent="Draw!";
}
else if(a>b){
    head.textContent="Player 1 Wins!";
}
else{
    head.textContent="Player 2 Wins!";
}
