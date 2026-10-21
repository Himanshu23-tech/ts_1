
export {};

interface IProduct {
    productID: number;
    name: string;
    price: number;
    category: string;
}

class Product implements IProduct {
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
}

function printProduct(product: IProduct): void {
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
