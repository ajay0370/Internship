
var butt=document.getElementsByTagName("button")

document.addEventListener("keypress",function(event){
    makesound(event.key);
    button_animation(event.key);
});

function makesound(wrd){
    switch(wrd){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }

}

function button_animation(currentkey){
    var activeButton=document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

for(let i=0;i<butt.length;i++){

document.getElementsByTagName("button")[i].addEventListener("click",function(){

    var word=document.getElementsByTagName("button")[i].textContent

    makesound(word)});

}