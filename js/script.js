var total1 = document.getElementById("scoreTotal1");
var total2 = document.getElementById("scoreTotal2");
var currentScore1 = document.getElementById("currentScore1");
var currentScore2 = document.getElementById("currentScore2");

var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");

var dice = document.getElementById("dice");
var roll = document.getElementById("roll");
var hold = document.getElementById("hold");

var newGames = document.getElementById("newGames")

let currentPlayer = 1

roll.addEventListener("click", function () {
  randomNum = getRandomNum(6);
  let numName = toWords(randomNum);

  dice.innerHTML = '<i class="fa-regular fa-dice-' + numName + '"></i>';

  // timer()

  if (currentPlayer == 1) {

    if (randomNum == 1) {
      p1.classList.remove("activePlayer")
      p2.classList.add("activePlayer")
      currentPlayer = 2
      currentScore1.innerHTML = 0
    }

    let number = parseInt(currentScore1.innerHTML)
    currentScore1.innerHTML = number + randomNum
  } else {

    if (randomNum == 1) {
      p2.classList.remove("activePlayer")
      p1.classList.add("activePlayer")
      currentPlayer = 1
      currentScore2.innerHTML = 0
    }

    let number = parseInt(currentScore2.innerHTML)
    currentScore2.innerHTML = number + randomNum
  }
});

hold.addEventListener("click", function () {
  if (currentPlayer == 1) {
    let number = parseInt(currentScore1.innerHTML)
    let total = parseInt(total1.innerHTML)

    total1.innerHTML = total + number

    currentScore1.innerHTML = 0
    currentPlayer = 2
    p1.classList.remove("activePlayer")
    p2.classList.add("activePlayer")

  } else {
    let number = parseInt(currentScore2.innerHTML)
    let total = parseInt(total2.innerHTML)

    total2.innerHTML = total + number

    currentScore2.innerHTML = 0
    currentPlayer = 1
    p2.classList.remove("activePlayer")
    p1.classList.add("activePlayer")
  }
});

newGames.addEventListener("click", function () {
  p2.classList.remove("activePlayer")
  p1.classList.add("activePlayer")
  currentPlayer = 1

  currentScore1.innerHTML = 0
  total1.innerHTML = 0
  currentScore2.innerHTML = 0
  total2.innerHTML = 0
})

var colorMode = document.getElementById("colorMode")
let color

let theme = localStorage.getItem("theme");

if (theme != null) {
  color = theme
  mode(theme)
}

colorMode.addEventListener("click", function () {
  console.log(color)
  if (color == "black") {
    mode("white")
    color = "white"
  } else {
    mode("black")
    color = "black"
  }
})