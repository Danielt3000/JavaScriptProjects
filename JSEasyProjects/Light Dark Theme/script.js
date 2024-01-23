const timeClass = document.querySelector(".time");

document.querySelector(".btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const current = parseInt(
    getComputedStyle(timeClass).getPropertyValue("--rotation")
  );
  console.log(current);

  timeClass.style.setProperty("--rotation", current + 180);
});
