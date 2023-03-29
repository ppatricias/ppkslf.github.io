const txtElement = [
  "Halo..",
  "Assalamualaykum..",
  "Hello..",
  "Ohayo..",
  "Annyeong",
  "Hola..",
  "Bonjour..",
  "Ni Hao..",
];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function typing() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".type-effect").textContent = words;
  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(typing, 500);
})();
