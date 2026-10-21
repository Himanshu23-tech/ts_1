
export {};

class Product {
    static companyName: string = "TechStore";

    productID: number;
    name: string;
    price: number;

    constructor(productID: number, name: string, price: number) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }

    static displayCompany(): void {
        console.log("Company Name:", Product.companyName);
    }

    displayInfo(): void {
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
