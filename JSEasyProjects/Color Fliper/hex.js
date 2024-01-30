const randomColor = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const h1 = document.querySelector("#hexH1");

document.querySelector(".btn").addEventListener("click", () => {
  let hexRandom = "#";

  for (let i = 0; i < 6; i++) {
    const number = randomNumer();
    hexRandom += randomColor[number];
  }
  h1.innerText = hexRandom;

  document.querySelector(".color").style.background = hexRandom;
});

function randomNumer() {
  return Math.floor(Math.random() * randomColor.length);
}
