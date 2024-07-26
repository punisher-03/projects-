var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var image1Src = document.querySelectorAll("img")[0];
image1Src.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var image2Src = document.querySelectorAll("img")[1];
image2Src.setAttribute("src", randomImage2);

if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerText = "🚩player 1 wins!";
}
if (randomImage2 > randomImage1) {
    document.querySelector("h1").innerText = "player 2 wins!🚩";
}
else if (randomImage1 === randomImage2) {
    document.querySelector("h1").innerText = "🤝Draw!";
}