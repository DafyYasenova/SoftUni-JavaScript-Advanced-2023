class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    };

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsArray = this.plants.map(el => el.plantName).join(', ')
        let plantsString = `Plants in the garden: ${plantsArray}`;
        result.push(plantsString);


        let storStringArray = this.storage
            .map(el => `${el.plantName} (${el.quantity})`)
            .join(', ');
        let storString = this.storage.length === 0
            ? `Plants in storage: The storage is empty.`
            : `Plants in storage: ${storStringArray}`;
        result.push(storString);
        return result.join('\n')
    }
}

//Testing generateReport
// const Garden = result;
// let myGarden = new Garden(250);

// assert.equal(myGarden.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
// assert.equal(myGarden.ripenPlant("apple", 10), "10 apples have successfully ripened.");
// assert.equal(myGarden.ripenPlant("orange", 1), "1 orange has successfully ripened.");
// assert.equal(myGarden.harvestPlant("orange"), "The orange has been successfully harvested.");
// assert.equal(myGarden.generateReport(), "The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)");

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
/*Output 1
The apple has been successfully planted in the garden.
The orange has been successfully planted in the garden.
Uncaught Error Error: Not enough space in the garden.
*/
// //Input 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));
/*Output 1
The apple has been successfully planted in the garden.
The orange has been successfully planted in the garden.
Uncaught Error Error: Not enough space in the garden.
*/ 

//Input 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));
/* Output 2
The apple has been successfully planted in the garden.

The orange has been successfully planted in the garden.
The cucumber has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
Uncaught Error Error: The orange is already ripe.
*/

//Input 3
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));
/*
Output 3
The apple has been successfully planted in the garden.
The orange has been successfully planted in the garden.
The cucumber has been successfully planted in the garden.
10 apples have successfully ripened.
1 orange has successfully ripened.
Uncaught Error Error: There is no olive in the garden.
*/
