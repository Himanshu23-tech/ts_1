
export {};

class Product {
    public productID: number;
    private price: number;
    protected category: string;

    constructor(productID: number, price: number, category: string) {
        this.productID = productID;
        this.price = price;
        this.category = category;
    }

    displayPrice(): void {
        console.log("Price:", this.price);
    }
}

class ElectronicProduct extends Product {
    displayCategory(): void {
        console.log("Product ID:", this.productID);
        console.log("Category:", this.category);
    }
}

const p1 = new ElectronicProduct(101, 50000, "Electronics");

console.log("Product ID:", p1.productID);

p1.displayPrice();
p1.displayCategory();

//console.log(p1.price); 

//console.log(p1.category);
