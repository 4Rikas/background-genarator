var _ = require('lodash');

console.log(_);

let arr = [1,2,3,4,5,6]

console.log("answer", _.without(arr, 3));

var css = document.getElementsByTagName("h3")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.getElementsByClassName("random")[0];



setgradient()


function setgradient () {
   body.style.background = 
  "linear-gradient(to right, "
   + color1.value 
   + ", " 
   + color2.value 
   + ")";
    
   css.textContent = body.style.background + ";";
}
function callcolor() {
  var randomcolor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomcolor2=  Math.floor(Math.random() * 16777215).toString(16);
  color1.value = "#" + randomcolor1;
  color2.value = "#" + randomcolor2;
  setgradient()
}

button.addEventListener("click", callcolor)

color1.addEventListener("input", setgradient)

color2.addEventListener("input", setgradient)

var b = document.getElementsByTagName("h1")[0].innerHTML = "adeee"