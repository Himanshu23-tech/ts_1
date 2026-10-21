class Product {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
function printProduct(product) {
    console.log("Product ID:", product.productID);
    console.log("Name:", product.name);
    console.log("Price:", product.price);
    console.log("Category:", product.category);
    console.log("--------------------");
}
const p1 = new Product(101, "Laptop", 50000, "Electronics");
const p2 = new Product(102, "Shoes", 2000, "Footwear");
printProduct(p1);
printProduct(p2);
export {};
