const expect = require('chai').expect;

// JS code:

const weddingDay = {
    pickVenue(capacity, pricePerGuest, location) {
        if (typeof capacity !== 'number' || typeof pricePerGuest !== 'number' || typeof location !== 'string' || location === '') {
            throw new Error("Invalid Information!")
        };
        if (location == "Varna") {

            if (capacity >= 150 && pricePerGuest <= 120) {
                return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
            } else {
                return `This venue does not meet your requirements!`;
            }
        } else {
            throw new Error(`The location of this venue is not in the correct area!`);
        };
    },

    otherSpendings(weddingDecoration, photography, discount) {
        if (!Array.isArray(weddingDecoration) || !Array.isArray(photography) || typeof discount !== "boolean") {
            throw new Error("Invalid Information!");
        }
        let totalPrice = 0;

        weddingDecoration.forEach((decoration) => {
            if (decoration === "flowers") {
                totalPrice += 500
            } else if (decoration === "Fabric drapes and curtains") {
                totalPrice += 400
            }
        });

        photography.forEach((service) => {
            if (service === "pictures") {
                totalPrice += 700
            } else if (service === "video") {
                totalPrice += 1300
            }
        });
        if (discount) {
            totalPrice = totalPrice * 0.85;
            return `You spend ${totalPrice}$ for wedding decoration and photography whit 15% discount!`
        } else {
            return `You spend ${totalPrice}$ for wedding decoration and photography!`
        }

    }
    ,
    tableDistribution(guests, tables) {
        if (typeof guests !== "number" || guests <= 0 ||
            typeof tables !== "number" || tables <= 0) {
            throw new Error("Invalid Information!");
        }
        let peopleOnTable = Math.round(guests / tables);

        if (peopleOnTable < 6) {
            return `There is only ${peopleOnTable} people on every table, you can join some tables.`
        } else {
            return `You have ${tables} tables with ${peopleOnTable} guests on table.`
        }
    }
}

//module.exports = weddingDay;

describe('weddingDay', function () {
    describe('pickVenue', function () {
        it('capacity is not a number', () => {
            expect(() => {
                weddingDay.pickVenue("5", 5, 'a');

            }).to.throw('Invalid Information!');
        });
        it('pricePerGuest is not a number', () => {
            expect(() => {
                weddingDay.pickVenue(5, '5', 'a');

            }).to.throw('Invalid Information!');
        });
        it('location is not a string', () => {
            expect(() => {
                weddingDay.pickVenue(5, '5', '');

            }).to.throw('Invalid Information!');
        });
        it('location is not a Varna', () => {
            expect(() => {
                weddingDay.pickVenue(5, 5, 'Sofia');

            }).to.throw('The location of this venue is not in the correct area!');
        });
        it('location is not a Varna', () => {
            expect(() => {
                weddingDay.pickVenue(5, 5, 'Sofia');

            }).to.throw('The location of this venue is not in the correct area!');
        });
        it('if the above conditions are not met, return the following message', () => {
            expect(weddingDay.pickVenue(50, 100, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(160, 180, 'Varna')).to.equal('This venue does not meet your requirements!');
        });
        it('If the capacity of the venue is greater or equal to 150, and pricePerGuest is less or equal to 120 return the string', () => {
            expect(weddingDay.pickVenue(200, 100, 'Varna')).to.equal('This venue meets the requirements, with capacity of 200 guests and 100$ cover.');
        });

    });
    describe('otherSpendings', function () {
        it("otherSpendingsIT", () => {
        expect(() => { weddingDay.otherSpendings(['aaa', 'bbb'], 'ccc', true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings('aaa', ['bbb', 'ccc'], true) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings('aaa', ['bbb', 'ccc'], 1) }).to.throw('Invalid Information!');
        expect(() => { weddingDay.otherSpendings('aaa', ['bbb', 'ccc'], 1) }).to.throw('Invalid Information!');
        });
        it('flowers, which costs $500 and Fabric drapes and curtains, which costs $400  and boolean = true= > 900 -15% = 765', () => {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], true)).to.equal('You spend 765$ for wedding decoration and photography with 15% discount!');
            // ако 3-я параметър е true, има 15 % отстъпка  и трябва да бъде приспадната
        });
        it('flowers, which costs $500 and Fabric drapes and curtains, which costs $400  and boolean = falfe > 900', () => {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], false)).to.equal('You spend 900$ for wedding decoration and photography!');
            // ако 3-я параметър е false, няма отстъпка
        });
        it('pictures, which costs $700, and boolean = true', () => {
            expect(weddingDay.otherSpendings([], ["pictures"], true)).to.equal('You spend 595$ for wedding decoration and photography with 15% discount!');

        });
        it('pictures, which costs $700, and boolean = false', () => {
            expect(weddingDay.otherSpendings([], ["pictures"], false)).to.equal('You spend 700$ for wedding decoration and photography!');

        });

    });
    describe('tableDistribution', function () {
        it('guest and table is not a number', () => {
            //expect(weddingDay.tableDistribution('5', '5')).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution(5, '5')).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution('5', 5)).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution(0, 5)).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution(5, 0)).to.throw('Invalid Information!');
            expect(weddingDay.tableDistribution(5, -1)).to.throw('Invalid Information!');

        });
        it('If the peopleOnTable are more than 6. return the following message(50/5=10 >6)', () => {
            expect(weddingDay.tableDistribution(50, 5)).to.equal('You have 5 tables with 10 guests on table.');

        })
        it('If the peopleOnTable are less than 6. return the following message(100/20=5<6)', () => {
            expect(weddingDay.tableDistribution(100, 20)).to.equal('There is only 5 people on every table, you can join some tables.');
        })
    });

});