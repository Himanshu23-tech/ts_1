class Product {
    productID;
    price;
    category;
    constructor(productID, price, category) {
        this.productID = productID;
        this.price = price;
        this.category = category;
    }
    displayPrice() {
        console.log("Price:", this.price);
    }
}
class ElectronicProduct extends Product {
    displayCategory() {
        console.log("Product ID:", this.productID);
        console.log("Category:", this.category);
    }
}
const p1 = new ElectronicProduct(101, 50000, "Electronics");
console.log("Product ID:", p1.productID);
p1.displayPrice();
p1.displayCategory();
export {};
//console.log(p1.price); 
//console.log(p1.category);
