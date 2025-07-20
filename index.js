function rollDice() {
  // Player 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImageSource1);

  // Player 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  // Update title
  var title = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "It's a Draw!";
  }
}

// Run automatically on page load
rollDice();
