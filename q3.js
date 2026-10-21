class Product {
    static companyName = "TechStore";
    productID;
    name;
    price;
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    static displayCompany() {
        console.log("Company Name:", Product.companyName);
    }
    displayInfo() {
        console.log("Product ID:", this.productID);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("--------------------");
    }
}
const p1 = new Product(101, "Laptop", 50000);
const p2 = new Product(102, "Mobile", 20000);
Product.displayCompany();
p1.displayInfo();
p2.displayInfo();
export {};
