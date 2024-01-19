const products = [
  { name: "Item 1", price: 100 },
  { name: "Item 2", price: 200 },
  { name: "Item 3", price: 10 },
  { name: "Item 4", price: 5 },
  { name: "Item 5", price: 500 },
  { name: "Item 6", price: 1000 },
];

const filterItems = products.filter((item) => {
  return item.price <= 100;
});

const itemName = products.map((item) => {
  return item.price;
});

console.log(itemName);

const itemFound = products.find((item) => {
  return item.name === album;
});
