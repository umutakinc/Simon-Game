let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed');
    
    setTimeout(() => {
        $(`#${currentColour}`).removeClass('pressed');
    }, 100);
}

$('.btn').click(function() {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});