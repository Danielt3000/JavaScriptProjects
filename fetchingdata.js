const data = () => {
  fetch("url")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//  implementing with React would use useEffect

useEffect(() => {
  fetch("url")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);

function fetchAndDsiplayData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "User 1",
    }),

    // important never forgive the headers and  the body JSON.stringify bc will not work
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
