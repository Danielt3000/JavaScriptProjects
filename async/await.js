async function fetchDataWithAsync() {
  try {
    const response = await fetch("url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error Fetching data", error);
  }
}

try {
  const response = await fetch("url");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
