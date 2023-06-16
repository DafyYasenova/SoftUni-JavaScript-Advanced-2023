const { assert } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');



describe("chooseYourCar", ()=>{
    describe("choosingType", () =>{

        it("If the year of the car is greater or equal to 2010", () =>{
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 2010), "This green Sedan meets the requirements, that you have.")
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 2020), "This green Sedan meets the requirements, that you have.")
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 1990), "This Sedan is too old for you, especially with that green color.")
        
        });

        it("If the year is less than 1900 and the year is more than 2022", () =>{
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'test', 1800), "Invalid Year!")
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'test', 2030), "Invalid Year!")
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'test', 1899), "Invalid Year!")
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'test', 2023), "Invalid Year!")
            assert.throw(()=> chooseYourCar.choosingType('test', 'test', 2010), "This type of car is not what you are looking for.")
            assert.throw(()=> chooseYourCar.choosingType('Sedan', 'test', 2023), "Invalid Year!")
        });
      
     });

     describe("brandName", () =>{

        it("if first parameter is not an array, and second parameter is not a number", () =>{
            assert.throw(()=> chooseYourCar.brandName(['Sedan'], '1'), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(['Sedan'], true), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(['Sedan'], null), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(['Sedan'], {}), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(['Sedan'], -1), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(1, 1), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName('true', 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(true, 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName({}, 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName(-1 , 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.brandName([] , -11 ), "Invalid Information!");
        });

        it("should return element of array without element on the current index", () =>{
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), "BMW, Peugeot");
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2), "BMW, Toyota");
        });
        
     });
     describe("carFuelConsumption", () =>{

        it("if two parameters is not a typeoff number", () =>{
            assert.throw(()=> chooseYourCar.carFuelConsumption(-1 , 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption([] , -11 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption(5 , -11 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption('test' , 1 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption('test' , -11 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption(true , -11 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption(true , 2 ), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption(5, 'test'), "Invalid Information!");
            assert.throw(()=> chooseYourCar.carFuelConsumption(null , 5 ), "Invalid Information!");
        });

        it("if the liters/100km is less or equal to 7L ", () =>{
            assert.equal(chooseYourCar.carFuelConsumption(100, 3), "The car is efficient enough, it burns 3.00 liters/100 km.");
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km.");
            
        });
        it("if the liters/100km is more 7L ", () =>{
            assert.equal(chooseYourCar.carFuelConsumption(100, 10), "The car burns too much fuel - 10.00 liters!");
        });
     });
});