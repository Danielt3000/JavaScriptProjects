function countDown(n) {
  if (n <= 0) {
    console.log("Hurray");
    return;
  }
  console.log(n);
  countDown(n - 1);
}

countDown(3);
