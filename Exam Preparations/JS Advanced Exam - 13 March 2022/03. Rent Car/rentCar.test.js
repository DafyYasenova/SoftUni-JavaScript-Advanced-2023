const expect = require('chai').expect;

// JS code:
const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

// Unit testing:

describe('rentCar', function () {
    describe('searchCar', function () {
        it(`finds one car`, () => {
            let shop = ["Volkswagen", "BMW", "Audi"];
            let model = "BMW";

            let result = rentCar.searchCar(shop, model);

            expect(result).to.equal(`There is 1 car of model BMW in the catalog!`)
        });

        it(`finds two cars`, () => {
            let shop = ["Volkswagen", "BMW", "Audi", "BMW"];
            let model = "BMW";

            let result = rentCar.searchCar(shop, model);

            expect(result).to.equal(`There is 2 car of model BMW in the catalog!`)
        });
        it(`invalid shop (number)`, () => {
            expect(() => {
                rentCar.searchCar(5, 'a');

            }).to.throw('Invalid input!');
        });

        it(`invalid shop (string)`, () => {
            expect(() => {
                rentCar.searchCar('abc', 'a');

            }).to.throw('Invalid input!');
        });
        it(`invalid model`, () => {
            expect(() => {
                rentCar.searchCar(['abc', 'a', "1"], 1);

            }).to.throw('Invalid input!');
        });
        it(`car not found`, () => {
            expect(() => {
                rentCar.searchCar(['b', 'a', 'c'], 'd');

            }).to.throw('There are no such models in the catalog!');
        });
    });

    describe('calculatePriceOfCar', function () {
        it(`invalid model`, () => {
            expect(() => {
                rentCar.calculatePriceOfCar(111, 2);

            }).to.throw('Invalid input!');
        });
        it(`invalid days`, () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Audi', '22');

            }).to.throw('Invalid input!');
        });
        it(`invalid days`, () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Audi', '22');

            }).to.throw('Invalid input!');
        });
        it(`correct price for model`, () => {

            let result = rentCar.calculatePriceOfCar('Audi', 2);
            // цената на Ауди е фиксирана 36 по условие, като 2ри парамерът се на резълт 
            // се взема броя (36*2 = 72)
            expect(result).to.equal(`You choose Audi and it will cost $72!`)
        });
        it(`models is not found`, () => {
            expect(() => {
                rentCar.calculatePriceOfCar('Moskvich', 1);

            }).to.throw('No such model in the catalog!');
        });

    });

    describe('checkBudget', function () {
        it(`invalid cost per day`, () => {
            expect(() => {
                rentCar.checkBudget('111', 2, 2);

            }).to.throw('Invalid input!');
        });
        it(`invalid day`, () => {
            expect(() => {
                rentCar.checkBudget(2, '2', 2);

            }).to.throw('Invalid input!');
        });
        it(`invalid budjet`, () => {
            expect(() => {
                rentCar.checkBudget(2, 2, '2');

            }).to.throw('Invalid input!');
        });
        it(`if the budget is bigger or equal to cost`, () => {
            let result = rentCar.checkBudget(1, 1, 10);
            expect(result).to.equal('You rent a car!');
        });
        it(`if the budget is bigger or equal to cost`, () => {
            let result = rentCar.checkBudget(5, 1, 10);
            expect(result).to.equal('You rent a car!');
        });
        it(`if the budget is less or equal to cost`, () => {
            let result = rentCar.checkBudget(5, 1, 1);
            expect(result).to.equal('You need a bigger budget!');
        });

    });
});
