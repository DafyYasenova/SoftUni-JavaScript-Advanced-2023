const { assert } = require('chai');

const carService = {
    isItExpensive(issue) {
        if (issue === "Engine" || issue === "Transmission") {
            return `The issue with the car is more severe and it will cost more money`;
        } else {
            return `The overall price will be a bit cheaper`;
        }
    },
    discount(numberOfParts, totalPrice) {
        if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
            throw new Error("Invalid input");
        }

        let discountPercentage = 0;

        if (numberOfParts > 2 && numberOfParts <= 7) {
            discountPercentage = 15;
        } else if (numberOfParts > 7) {
            discountPercentage = 30;
        }

        let result = (discountPercentage / 100) * totalPrice;

        if (numberOfParts <= 2) {
            return "You cannot apply a discount";
        } else {
            return `Discount applied! You saved ${result}$`;
        }
    },
    partsToBuy(partsCatalog, neededParts) {
        let totalSum = 0;

        if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
            throw new Error("Invalid input");
        }
        neededParts.forEach((neededPart) => {
            partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                    totalSum += obj.price;
                }
            });
        });

        return totalSum;
    },
};

// unit testing:


describe("carService", () => {
    describe("isItExpensive", () => {
        it("if issue is Engine", () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
        });
        it("if issue is Transmission", () => {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
        });
        it("if issue is someting different of Engine and Transimission", () => {
            assert.equal(carService.isItExpensive('Different input'), `The overall price will be a bit cheaper`)
        });
    });
    describe("discount", () => {
        it("if input is invalid", () => {
           assert.throw(()=> carService.discount('Some', 1), 'Invalid input')
           assert.throw(()=> carService.discount(1, 'Some'), 'Invalid input')
        });
      
        it("If the numberOfParts is smaller or equal to 2", () => {
           assert.equal(carService.discount(1, 60), 'You cannot apply a discount')
           assert.equal(carService.discount(2, 60), 'You cannot apply a discount')   
        });

        it("if parts is between 3 and 7, discount = 15%", () => {
            assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`)
            assert.equal(carService.discount(7, 100), `Discount applied! You saved 15$`)
        }); 

        it("if parts is 8 or more, discount = 30%", () => {
            assert.equal(carService.discount(8, 100), `Discount applied! You saved 30$`)
        }); 
        
    });
    describe("partsToBuy", () => {

        it("If partsCatalog or neededParts parameters are not an arrays", () => {
            assert.throw(()=> carService.partsToBuy('Some', ['test']), 'Invalid input')
            assert.throw(()=> carService.partsToBuy(['test'], 'Some'), 'Invalid input')
        });

        it("iterate through both the arrays and calculate the total price of the parts that are equal to the neededParts", () => {
            let partsCatalog = [
            { part: "blowoff valve", price: 145 }, 
            { part: "coil springs", price: 230 }];

            let neededPart = ["blowoff valve", "injectors"];
            assert.equal(carService.partsToBuy(partsCatalog, neededPart), 145);
         
        });
        it("If partsCatalog is empty, return 0", () => {
            let neededPart = ["blowoff valve", "injectors"];
    
            assert.equal(carService.partsToBuy([], neededPart), 0);
        });
    });
});