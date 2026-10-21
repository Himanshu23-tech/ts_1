
function displayProducts<T>(items: T[]): void {
    for (const item of items) {
        console.log(item);
    }

    console.log("--------------------");
}

function getFirstElement<T>(items: T[]): T | undefined {
    return items[0];
}

const productNames: string[] = ["Laptop", "Mobile", "Shoes"];
const productPrices: number[] = [50000, 20000, 2000];
const productIDs: number[] = [101, 102, 103];

console.log("Product Names:");
displayProducts<string>(productNames);

console.log("Product Prices:");
displayProducts<number>(productPrices);

console.log("Product IDs:");
displayProducts<number>(productIDs);

console.log("First Product Name:", getFirstElement(productNames));
console.log("First Product Price:", getFirstElement(productPrices));
console.log("First Product ID:", getFirstElement(productIDs));
