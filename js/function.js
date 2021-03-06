// Function for get random number

function getRandomNum(max) {
  return Math.floor(Math.random() * max + 1);
}

// Function for change number oon word
var th = ["", "thousand", "million", "billion", "trillion"];
var dg = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
var tn = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
var tw = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];

function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "not a number";
  var x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 15) return "too big";
  var n = s.split("");
  var str = "";
  var sk = 0;
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + " ";
        sk = 1;
      }
    } else if (n[i] != 0) {
      // 0235
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "hundred ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += th[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }

  if (x != s.length) {
    var y = s.length;
    str += "point ";
    for (var i = x + 1; i < y; i++) str += dg[n[i]] + " ";
  }
  return str.replace(/\s+/g, " ");
}

function mode(theme) {
  if (theme == "white") {
    // Change class for white mode
    colorMode.classList.remove("white");
    colorMode.classList.add("dark");

    document.getElementById("containers").classList.add("bg-light");
    document.getElementById("containers").classList.remove("bg-dark");
    document.getElementById("sun").classList.add("text-dark");
    document.getElementById("sun").classList.remove("text-light");
    p1.classList.remove("text-light");
    p2.classList.remove("text-light");
    p1.classList.add("text-dark");
    p2.classList.add("text-dark");
    dice.classList.add("text-dark");
    dice.classList.remove("text-light");

    // Insert color theme in local storage
    localStorage.setItem("theme", theme);
  } else {
    // Change class for dark mode
    colorMode.classList.add("white");
    colorMode.classList.remove("dark");

    document.getElementById("containers").classList.remove("bg-light");
    document.getElementById("containers").classList.add("bg-dark");
    document.getElementById("sun").classList.add("text-light");
    document.getElementById("sun").classList.remove("text-dark");
    p1.classList.add("text-light");
    p2.classList.add("text-light");
    p1.classList.remove("text-dark");
    p2.classList.remove("text-dark");
    dice.classList.remove("text-dark");
    dice.classList.add("text-light");

    // Insert color theme in local storage
    localStorage.setItem("theme", theme);
  }
}
