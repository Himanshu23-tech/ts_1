"use strict";
function displayProducts(items) {
    for (const item of items) {
        console.log(item);
    }
    console.log("--------------------");
}
function getFirstElement(items) {
    return items[0];
}
const productNames = ["Laptop", "Mobile", "Shoes"];
const productPrices = [50000, 20000, 2000];
const productIDs = [101, 102, 103];
console.log("Product Names:");
displayProducts(productNames);
console.log("Product Prices:");
displayProducts(productPrices);
console.log("Product IDs:");
displayProducts(productIDs);
console.log("First Product Name:", getFirstElement(productNames));
console.log("First Product Price:", getFirstElement(productPrices));
console.log("First Product ID:", getFirstElement(productIDs));
