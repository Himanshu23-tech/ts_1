
export {};

class Product {
    price: number;

    constructor(price: number) {
        this.price = price;
    }

    calculateDiscount(): number {
        return this.price * 5 / 100;
    }
}

class ElectronicProduct extends Product {
    override calculateDiscount(): number {
        return this.price * 10 / 100;
    }
}

class ClothingProduct extends Product {
    override calculateDiscount(): number {
        return this.price * 15 / 100;
    }
}

const p1 = new Product(1000);
const p2 = new ElectronicProduct(1000);
const p3 = new ClothingProduct(1000);

console.log("Product Discount:", p1.calculateDiscount());
console.log("Electronic Discount:", p2.calculateDiscount());
console.log("Clothing Discount:", p3.calculateDiscount());
