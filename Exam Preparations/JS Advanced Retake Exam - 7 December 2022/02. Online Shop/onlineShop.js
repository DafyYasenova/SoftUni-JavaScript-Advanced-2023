class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {

        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({ product, quantity });
        
        return `The ${product} has been successfully delivered in the warehouse.`;
    
}
    quantityCheck(product, minimalQuantity) {
        let productFind =this.products.find((p) => p.product == product)
        if (!productFind) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (minimalQuantity <= productFind.quantity) {
       return `You have enough from product ${product}.`;
        }
        
        let difference = minimalQuantity -productFind.quantity;
        productFind.quantity = minimalQuantity;
         return `You added ${difference} more from the ${productFind.product} products.`
    }
    sellProduct(product) {
        let sellProduct = this.products.find((p)=> p.product == product);

        if(!sellProduct){
            throw new Error (`There is no ${product} in the warehouse.`);
        }
        sellProduct.quantity -= 1;
        let quantity = product.quantity;
        this.sales.push({product, quantity} )
        return `The ${sellProduct.product} has been successfully sold.`
    }
    revision(){
        if(this.sales.length === 0){
          throw new Error (`There are no sales today!`);
        }
        let result = [];
        result.push(`You sold ${this.sales.length} products today!`);
        result.push('Products in the warehouse:');

        this.products.forEach(p =>{
            result.push(`${p.product}-${p.quantity} more left`);
        })
        return result.join('\n')
    }
}

//Input 1
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));
// Output 1
// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse.
// Uncaught Error Error: Not enough space in the warehouse.

//Input 2
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 10,));

// Output 2
// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products.
// Uncaught Error Error: There is no TV in the warehouse.

//Input 3
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
 
// Output 3
// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold.
// Uncaught Error Error: There is no keyboard in the warehouse.
 
//Input 4
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());

// Output 4
// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold. 
// You sold 2 products today!
// Products in the warehouse: 
// headphones-9 more left 
// laptop-9 more left

