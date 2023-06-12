class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    };

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } 

            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        
    };

    sellCar(model, desiredMileage) {
        
        let index = this.availableCars.findIndex((x => x.model === model))
        let foundCar = this.availableCars[index];

        if (index === -1) {
            throw new Error(`${model} was not found!`);
        } else {
            if (foundCar.mileage <= desiredMileage) {
                foundCar.price = foundCar.price;
            } else if ((foundCar.mileage - desiredMileage) <= 40000) {
                foundCar.price *= 0.95;
            } else if ((foundCar.mileage - desiredMileage) > 40000) {
                foundCar.price *= 0.90;
            }

            this.soldCars.push({ model, horsepower: foundCar.horsepower, soldPrice: foundCar.price });
            this.availableCars.splice(index, 1);
            this.totalIncome += foundCar.price;
            return (`${model} was sold for ${(foundCar.price).toFixed(2)}$`)

        }
    };
    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let result = this.availableCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);

        result.unshift(`-Available cars:`);
        return result.join('\n')
    };

    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let finallyResult = [];
        finallyResult.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        finallyResult.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.map(c => 
            finallyResult.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));

        return finallyResult.join('\n');
    };
}

//Input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

/* Output 1
New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
Uncaught Error Error: Invalid input!
*/
//------------------------------------------------------------------
//Input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
 /*
Output 2
Toyota Corolla was sold for 3500.00$
Mercedes C63 was sold for 26100.00$
*/
//------------------------------------------------------------------
//Input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

/* Output 3
-Available cars:
---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
---Audi A3 - 120 HP - 240000.00 km - 4900.00$
*/
//------------------------------------------------------------------
// Input 4
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

/* -SoftAuto has a total income of 29600.00$
-2 cars sold:
---Mercedes C63 - 300 HP - 26100.00$
---Toyota Corolla - 100 HP - 3500.00$
*/