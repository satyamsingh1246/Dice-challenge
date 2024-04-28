
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImage1 = "dice"+ randomNumber1 + ".png";
var randomImageSource1 = "images/"+randomImage1;
var image1 = document.querySelector("img")[0];
image1.setAttribute("src",randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImage2 = "dice"+ randomNumber1 + ".png";
var randomImageSource2 = "images/"+randomImage2;
var image2 = document.querySelector("img")[1];
image2.setAttribute("src",randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player1 wins"
}
else{
    document.querySelector("h1").innerHTML = "player2 wins"
}