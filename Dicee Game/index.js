var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// 将摇骰子的逻辑封装到一个函数中
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
  
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }
  
  // 添加按钮点击事件监听器
  document.getElementById("rollButton").addEventListener("click", rollDice);