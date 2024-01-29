document.querySelector(".btn").addEventListener("click", () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const randomColor = "rgb(" + x + "," + y + "," + z + ")";

  document.querySelector(".color").style.background = randomColor;
});
