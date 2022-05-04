// initialize element id
var total1 = document.getElementById("scoreTotal1");
var total2 = document.getElementById("scoreTotal2");
var currentScore1 = document.getElementById("currentScore1");
var currentScore2 = document.getElementById("currentScore2");

var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");

var dice = document.getElementById("dice");
var roll = document.getElementById("roll");
var hold = document.getElementById("hold");

var newGames = document.getElementById("newGames");

// Current player play
let currentPlayer = 1;

// Action for button "ROLL DICE"
roll.addEventListener("click", function () {
  // Get random number
  randomNum = getRandomNum(6);
  // Get name for number generate
  let numName = toWords(randomNum);

  // Dice face generate
  dice.innerHTML = '<i class="fa-regular fa-dice-' + numName + '"></i>';

  if (currentPlayer == 1) {
    if (randomNum == 1) {
      // If player 1 get number 1 then it's up to player 2 to play
      p1.classList.remove("activePlayer");
      p2.classList.add("activePlayer");
      currentPlayer = 2;
      currentScore1.innerHTML = 0;
    } else {
      // If the player 1 has a number other than 1 then the content is added in CurrentScore
      let number = parseInt(currentScore1.innerHTML);
      currentScore1.innerHTML = number + randomNum;
    }
  } else {
    if (randomNum == 1) {
      // If player 2 get number 1 then it's up to player 1 to play
      p2.classList.remove("activePlayer");
      p1.classList.add("activePlayer");
      currentPlayer = 1;
      currentScore2.innerHTML = 0;
    } else {
      // If the player 2 has a number other than 1 then the content is added in CurrentScore
      let number = parseInt(currentScore2.innerHTML);
      currentScore2.innerHTML = number + randomNum;
    }
  }
});

// Action for button "HOLD"
hold.addEventListener("click", function () {
  if (currentPlayer == 1) {
    let number = parseInt(currentScore1.innerHTML);
    let total = parseInt(total1.innerHTML);

    total1.innerHTML = total + number;

    // Check if player 1 take 100 points and attach a message for win
    if (total1.innerHTML >= 100) {
      currentScore1.innerHTML = "Congratulations you won";
      roll.disabled = true;
      hold.disabled = true;
    } else {
      currentScore1.innerHTML = 0;
      currentPlayer = 2;
      p1.classList.remove("activePlayer");
      p2.classList.add("activePlayer");
    }
  } else {
    // Check if player 2 take 100 points and attach a message for win
    let number = parseInt(currentScore2.innerHTML);
    let total = parseInt(total2.innerHTML);

    total2.innerHTML = total + number;
    if (total2.innerHTML >= 100) {
      currentScore2.innerHTML = "Congratulations you won";
      roll.disabled = true;
      hold.disabled = true;
    } else {
      currentScore2.innerHTML = 0;
      currentPlayer = 1;
      p2.classList.remove("activePlayer");
      p1.classList.add("activePlayer");
    }
  }
});

// Action for button "NEW GAMES"
newGames.addEventListener("click", function () {
  // Reset score
  p2.classList.remove("activePlayer");
  p1.classList.add("activePlayer");
  currentPlayer = 1;

  currentScore1.innerHTML = 0;
  total1.innerHTML = 0;
  currentScore2.innerHTML = 0;
  total2.innerHTML = 0;
  roll.disabled = false;
  hold.disabled = false;
});

// Initalize theme color
var colorMode = document.getElementById("colorMode");
let color;

// Get last theme mode use on local storage
let theme = localStorage.getItem("theme");

// Get if theme color it's initialize or no
if (theme != null) {
  color = theme;
  mode(theme);
}

// Action color mode
colorMode.addEventListener("click", function () {
  console.log(color);
  if (color == "black") {
    mode("white");
    color = "white";
  } else {
    mode("black");
    color = "black";
  }
});
