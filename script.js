let arr = [
  "JERSEY",
  "SKANDA",
  "RRR",
  "BAHUBALI",
  "RANGASTALAM",
  "KUSHI",
  "SAHOO",
  "VENKEYMAMA",
  "MANAM",
  "NAYAK",
  "SREEKARAM",
  "BILLA",
  "DEVADASU",
  "READY",
  "JANATHAGARAGE",
  "HAPPY",
  "BUNNY",
  "AKHIL",
  "EEGA",
  "KRACK",
  "HYPER",
  "RADHESHYAM",
  "JALSA",
  "TAMMUDU",
  "JAILAVAKUSA",
  "TAGORE",
];

let eleSet = new Set();

let chancesRemaining = 7;
correctlyGuessed = 0;

const wordToGuess = document.getElementById("word-to-guess");
const input = document.getElementById("letter");
const count = document.getElementById("count");
const inp = document.getElementById("inp");
const wonLost = document.getElementById("won-lost");
const hasSet = document.getElementById("set");
const guessedSet = document.getElementById("guessedSet");

let num = Math.floor(Math.random() * arr.length);
const word = arr[num];
let ans = [];
let ansStr = "";

let guessedStr = "";

for (let i = 0; i < word.length; i++) {
  ans.push("_");
  ansStr += "_";
}

wordToGuess.innerHTML = ansStr;

// ----------------------------------------------------------------------------------------------------

//adding event listener to input
input.addEventListener("keypress", game);

function game(e) {
  if (input.value != "" && e.key === "Enter") {
    console.log(input.value);

    hasSet.style.display = "none";

    if (eleSet.has(input.value.toUpperCase())) {
      hasSet.style.display = "block";
      return;
    }
    let str = "";
    // console.log(ans);
    let inWord = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === input.value.toUpperCase()) {
        ans[i] = word[i].toUpperCase();
        inWord += 1;
        correctlyGuessed += 1;
      }
    }

    for (let i = 0; i < ans.length; i++) {
      str += ans[i];
    }
    if (inWord === 0) {
      chancesRemaining -= 1;
    }

    wordToGuess.innerHTML = str;
    count.innerHTML = chancesRemaining;

    if (guessedStr === "") guessedStr += input.value.toUpperCase();
    else guessedStr += " , " + input.value.toUpperCase();

    guessedSet.innerHTML = guessedStr;

    eleSet.add(input.value.toUpperCase());
    if (chancesRemaining === 0) {
      inp.classList.add("inp-remove");

      const p = document.createElement("p");
      p.textContent = `You lost the game! The word is ${word}`;
      const restart = document.createElement("p");
      const restartBtn = document.createElement("a");
      const textspan = document.createElement("span");
      restartBtn.textContent = "Click here";
      restartBtn.href = "index.html";
      wonLost.appendChild(p);
      restart.appendChild(restartBtn);
      textspan.textContent = " to start a new game";
      restart.appendChild(textspan);
      wonLost.appendChild(restart);
      wonLost.style.display = "block";
    }

    if (correctlyGuessed === word.length) {
      inp.classList.add("inp-remove");

      const p = document.createElement("p");
      p.textContent = "You won the game!";
      const restart = document.createElement("p");
      const restartBtn = document.createElement("a");
      const textspan = document.createElement("span");
      restartBtn.textContent = "Click here";
      restartBtn.href = "index.html";
      wonLost.appendChild(p);
      restart.appendChild(restartBtn);
      textspan.textContent = " to start a new game";
      restart.appendChild(textspan);
      wonLost.appendChild(restart);
      wonLost.style.display = "block";
    }
    input.value = "";
  }
}

// --------------------------------------------------------------------------------------------

// add a event listener to the click here to start a new game button to start a new game.
