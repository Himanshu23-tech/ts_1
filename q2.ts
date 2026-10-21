
export {};

class Product {
    productID: number;
    name: string;
    price: number;
    category: string;

    constructor(productID: number, name: string, price: number, category: string) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    displayInfo(): void {
        console.log("Product ID:", this.productID);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("Category:", this.category);
        console.log("--------------------");
    }
}

const p1 = new Product(101, "Laptop", 50000, "Electronics");
const p2 = new Product(102, "T-Shirt", 800, "Clothing");
const p3 = new Product(103, "Rice", 100, "Grocery");

p1.displayInfo();
p2.displayInfo();
p3.displayInfo();
