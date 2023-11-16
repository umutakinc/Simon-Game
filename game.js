let buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

