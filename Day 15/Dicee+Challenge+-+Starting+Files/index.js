var random1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" + random1 +".png";

var randomImageSource="images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var random2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice" + random2 +".png";

var randomImageSource2="images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}