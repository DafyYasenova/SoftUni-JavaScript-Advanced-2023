const expect = require('chai').expect;


// JS code:
const findNewApartment = {
    isGoodLocation(city, nearPublicTransportation) {
        if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean") {
            throw new Error("Invalid input!");
        }
        if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
            return "This location is not suitable for you.";
        } else {
            if (nearPublicTransportation == true) {
                return "You can go on home tour!";
            }
            else {
                return "There is no public transport in area.";
            }
        }
    },
    isLargeEnough(apartments, minimalSquareMeters) {
        let resultArr = [];
        if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
            throw new Error("Invalid input!");
        }
        apartments.map((apartment) => {
            if (apartment >= minimalSquareMeters) {
                resultArr.push(apartment);
            }
        });
        return resultArr.join(', ');
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number"
            || price <= 0 || budget <= 0) {
            throw new Error("Invalid input!");
        }
        let result = budget - price;
        if (result < 0) {
            return "You don't have enough money for this house!";
        } else {
            return "You can afford this home!";
        }
    },
};

describe('findNewApartment', () => {

    it('iisGoodLocation', () => {
        // if the city and nearPublicTransportation are not a string and boolean
        expect(() => { findNewApartment.isGoodLocation('Sofia', 1) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw("Invalid input!");

        //If the value of the string city is different than a "Sofia", "Plovdiv" or "Varna" 
        expect(findNewApartment.isGoodLocation('Haskovo', true)).to.equal("This location is not suitable for you.");
        //If the value of the boolean nearPublicTransportation is false
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
        // Otherwise, if the above conditions are not met, return the following message:
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        
    });

    it('isLargeEnough', () => {
        // If passed apartments parameter is not an array.
        expect(() => { findNewApartment.isLargeEnough(50, 40) }).to.throw("Invalid input!");
        //If apartments is empty array.
        expect(() => { findNewApartment.isLargeEnough([], 40) }).to.throw("Invalid input!");
       // expect(() => { findNewApartment.isLargeEnough([], 40), "" }).to.throw("Invalid input!");
        //If the minimalSquareMeters is not a number.
        expect(() => { findNewApartment.isLargeEnough([40], '40') }).to.throw("Invalid input!");

        //You must add the area of apartment in resultArr if is equal or bigger than minimalSquareMeters.
        expect(findNewApartment.isLargeEnough([10,20,30,40], 25)).to.equal('30, 40');
        expect(findNewApartment.isLargeEnough([10,30,40,20], 50)).to.equal('');
        expect(findNewApartment.isLargeEnough([40,30,50,20], 50)).to.equal('50');


    });
    it('isItAffordable', () => {
        // if the price and budget are not a number  
        expect(() => { findNewApartment.isItAffordable('22', '55') }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable(55, '55') }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable('22', 55) }).to.throw("Invalid input!");
        // if price and budget are less or equal to 0
        expect(() => { findNewApartment.isItAffordable(0, 55) }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isItAffordable(55, 0) }).to.throw("Invalid input!");
        // You need to calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget.
        expect(findNewApartment.isItAffordable(55, 50)).to.equal("You don't have enough money for this house!");
        //if the above conditions are not met
        expect(findNewApartment.isItAffordable(50, 55)).to.equal("You can afford this home!");
    });
});
