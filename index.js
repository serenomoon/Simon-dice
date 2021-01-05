var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// SECUENCIA
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColour[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).addClass("pressed");
  makeSound(randomChosenColour);

  setTimeout(function() {
    $("#" + randomChosenColour).removeClass("pressed");
  }, 100);

  level++;
  $("h1").text("Nivel " + level)

}


// SONIDOS
function makeSound(key) {
  switch (key) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;

    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;

    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;

    default:
      console.log(innerHTML);

  }
}


// ON CLICK
$(document).on("click", ".btn", function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour)

  makeSound(userChosenColour);

  $("#" + userChosenColour).addClass("pressed");

  setTimeout(function() {
    $("#" + userChosenColour).removeClass("pressed");
  }, 50)
  checkAnswer(userClickedPattern);

});


// KEYPRESS
$(document).keypress(function() {
  nextSequence();
})


// ANSWER
function checkAnswer(currentLevel) {
  if (currentLevel[currentLevel.length - 1] === gamePattern[currentLevel.length - 1]) {
    if (gamePattern.length === currentLevel.length) {

      setTimeout(function() {
        nextSequence()
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over")
    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200);
    $("h1").text("Haz perdido, Presiona una tecla para continuar.");
    startOver();
  }
}


// STARTOVER
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}
