let pdx = { name: "Portland" };
let sfo = { name: "San Francisco" };
let sea = { name: "Seattle" };
let cso = { name: "Aktau" };
let dzn = { name: "Zhezkazgan" };

let usa = { name: "United States of America", cities: [pdx, sfo, sea] };
let kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };
let uraguay = { name: "Uruguay", cities: [] };

let boxOfStuff = {
  book: "Object-Oriented Javascript",
  smallerBox: {
    stuff: ["pencils", "pens"],
    smallestBox: {
      stuff: ["paper clips", "thumbtacks"]
    }
  }
};

let tomatoes = { name: "Tomatoes", price: 2.99 };
let cucumbers = { name: "Cucumbers", price: 0.99 };
let onions = { name: "Onions", price: 0.79 };

let groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

let iPhone = { name: "iPhone", price: 699 };
let android = { name: "Android", price: 499 };
let windowsPhone = { name: "Windows Phone", price: 399 };

let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

let stores = [groceryStore, phoneStore];

stores.forEach(function(store) {
  console.log(store.name + " sells:");
  store.products.forEach(function(product) {
    console.log(product.name);
  });
  console.log("\n");
});