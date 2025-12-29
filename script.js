const text1 = "Hello Spicy 🔥. Ou tu préfères Spicy_dude ? Ou Batman? Ah non Batman c'est un secret en fait 💀. Du coup chais pas. Ou plutôt tout ce que je sais c'est que je ne sais rien. Hihi. Moi aussi je peux emmerder les autres, t'es pas le seul 😆. Prépares toi, ma vengeance sera TERRIBLE 👿 (P.S: j'ai pas trouvé l'evil qui sourit malheureusement, du coup... pourtant il a l'air plus stylé non ?). Oui là je suis en train de raconter n'importe quoi pour te faire perdre ton temps. Chaque seconde compte. Bref, c'était Ghostie à l'appareil 👻. On se revois en janvier 🐱";
const text2 = "Peace 🕊️ & Love ❤️";

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

let index = 0;
let currentLine = 1;

function typeText() {
  if (currentLine === 1) {
    line1.textContent += text1[index];
  } else {
    line2.textContent += text2[index];
  }

  index++;

  if (currentLine === 1 && index >= text1.length) {
    currentLine = 2;
    index = 0;
    setTimeout(typeText, 500);
    return;
  }

  if (currentLine === 2 && index >= text2.length) {
    return;
  }

  setTimeout(typeText, 100);
}

typeText();

// ----- FLOATING ICONES -----

const ICON_SRC = "chilli.png"; // ton image unique ici

function spawnIcon() {
  const icon = document.createElement("img");
  icon.src = ICON_SRC;
  icon.className = "floating-icon";

  icon.style.left = Math.random() * 100 + "%";
  icon.style.top = Math.random() * 100 + "%";
  icon.style.animationDuration = 8 + Math.random() * 6 + "s";

  document.body.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 12000);
}

// rythme lent et irrégulier
setInterval(spawnIcon, 1200);
