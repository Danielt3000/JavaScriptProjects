const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];

  if (user.value === "" || user.value == null) {
    message.push("you need to write you name ");
  }

  if (password.value.length < 6) {
    message.push("password need to me more larger than 6");
  } else if (password.value.length > 20) {
    message.push("Password need to be below of 20");
  }

  if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(",");
  }
});
