const figureParts = document.getElementsByClassName("figure-part");
const wordArea = document.getElementsByClassName("wrong-letters-container")[0];
const wrongLetters = document.getElementById("wrong-letters");
const hiddenWord = document.getElementById("word");
const popUp = document.getElementsByClassName("popup-container")[0];
const finalMessage = document.getElementById("final-message");
const result = document.getElementById("final-message-reveal-word");
const notification = document.getElementById("notification-container");
const button = document.getElementById("play-button");

const word = "A";

let buttons = [];

button.addEventListener("click", () => location.reload());

// Array.from(figureParts).forEach((item) => (item.style.display = "initial"));

wordArea.textContent = "";

for (let i = 0; i < 26; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].textContent = String.fromCharCode(65 + i);
  wordArea.append(buttons[i]);
}

Array.from(buttons).forEach((item) =>
  item.addEventListener("click", () => {
    let life = 6;

    if (word.includes(item.textContent)) {
      hiddenWord.textContent = item.textContent;
    } else {
      wrongLetters.textContent = item.textContent;
    }

    if (hiddenWord.textContent.includes("_")) {
      item.disabled = true;
      Array.from((figureParts[life].style.display = "initial"));
      life--;
      resultShow(life);
    }
  })
);

function resultShow(life) {
  popUp.style.display = "initial";
  finalMessage.style.display = "initial";
  result.textContent = "Do you wanna ";
  result.style.display = "initial";
  notification.style.display = "initial";
  life > 0
    ? (finalMessage.textContent = "Yey You found the answer")
    : (finalMessage.textContent = "You failed this time");
}

for (let i = 0; i < word.length; i++) hiddenWord.textContent += "_ ";
