const { assert } = require('chai');

const motorcycleRider = {
    licenseRestriction(category) {
      if (category === "AM") {
        return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      } else if (category === "A1") {
        return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      } else if (category === "A2") {
        return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      } else if (category === "A") {
        return 'No motorcycle restrictions, and the minimum age is 24.'
      } else {
        throw new Error("Invalid Information!");
      }
    },
    motorcycleShowroom(engineVolume, maximumEngineVolume) {
      if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
        throw new Error("Invalid Information!");
      }
      let availableBikes = [];
      engineVolume.forEach((engine) => {
  
        if (engine <= maximumEngineVolume && engine >= 50) {
          availableBikes.push(engine);
        }
      });
      return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
    },
    otherSpendings(equipment, consumables, discount) {
      if (
        !Array.isArray(equipment) ||
        !Array.isArray(consumables) ||
        typeof discount !== "boolean"
      ) {
        throw new Error("Invalid Information!");
      }
      let totalPrice = 0;
  
      equipment.forEach((element) => {
        if (element === "helmet") {
          totalPrice += 200
        } else if (element === "jacked") {
          totalPrice += 300
        }
      });
  
      consumables.forEach((element) => {
        if (element === "engine oil") {
          totalPrice += 70
        } else if (element === "oil filter") {
          totalPrice += 30
        }
      });
      if (discount) {
        totalPrice = totalPrice * 0.9;
        return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
      } else {
        return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
      }
  
    }
  };

  describe("MotorcycleRider", ()=>{
    describe("licenseRestriction", () =>{

        it("If the category is AM", () => {
            assert.equal(motorcycleRider.licenseRestriction('AM'), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });
        it("If the category is A1", () => {
            assert.equal(motorcycleRider.licenseRestriction('A1'), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });
        it("If the category is A2", () => {
            assert.equal(motorcycleRider.licenseRestriction('A2'), "Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        it("If the category is A", () => {
            assert.equal(motorcycleRider.licenseRestriction('A'), "No motorcycle restrictions, and the minimum age is 24.")
        });

        it("if input is invalid", () => {
            assert.throw(()=> motorcycleRider.licenseRestriction('test'), "Invalid Information!")
            assert.throw(()=> motorcycleRider.licenseRestriction(11), "Invalid Information!")
            assert.throw(()=> motorcycleRider.licenseRestriction([]), "Invalid Information!")
            assert.throw(()=> motorcycleRider.licenseRestriction({}), "Invalid Information!")
            assert.throw(()=> motorcycleRider.licenseRestriction(true), "Invalid Information!")
        });
      
     });

     describe("motorcycleShowroom", () =>{

        it("if input is invalid", () => {
            assert.throw(()=> motorcycleRider.motorcycleShowroom(['test'], 'test'), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom(['test'], true), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom(['test'], ['test 2']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom(['test'], {}), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom(1, ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom('test', 2), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom(true, 3), "Invalid Information!")
            assert.throw(()=> motorcycleRider.motorcycleShowroom('test', 'stest'), "Invalid Information!")
           assert.throw(()=> motorcycleRider.motorcycleShowroom([], 40), "Invalid Information!")
          
        });
        it("If engineVolume elements its less ot equal to maximumEngineVolume", () => {
            assert.equal(motorcycleRider.motorcycleShowroom([100, 200], 150), "There are 1 available motorcycles matching your criteria!")
            assert.equal(motorcycleRider.motorcycleShowroom([100, 200, 300], 50), "There are 0 available motorcycles matching your criteria!")
            assert.equal(motorcycleRider.motorcycleShowroom([300], 150), "There are 0 available motorcycles matching your criteria!")
            assert.equal(motorcycleRider.motorcycleShowroom([100, 200, 300], 500), "There are 3 available motorcycles matching your criteria!")
        
        });

     });
     describe("otherSpendings", () =>{

        it("if input is invalid", () => {
            assert.throw(()=> motorcycleRider.otherSpendings(['test'], 'test', ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings(['test'], true, ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings(['test'], ['test 2'], 5), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings(['test'], {}, 2), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings(1, ['test'], ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings('test', ['test'], ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings(true, ['test'],  ['test']), "Invalid Information!")
            assert.throw(()=> motorcycleRider.otherSpendings('test', 'stest', ['test']), "Invalid Information!")
          
        });
        it("if discount is false, and equipment and consumables is valid", () =>{
            /*helmet, which costs $200
              jacked, which costs $300
              engine oil, which costs $70
              oil filter, which costs $30
            */
          
          assert.equal(motorcycleRider.otherSpendings(['helmet'],['engine oil'], false), "You spend $270.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['jacked'],['engine oil'], false), "You spend $370.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['jacked'],['oil filter'], false), "You spend $330.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['helmet'],['oil filter'], false), "You spend $230.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['engine oil'], false), "You spend $570.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['oil filter'], false), "You spend $530.00 for equipment and consumables!")
          assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['engine oil', 'oil filter'], false), "You spend $600.00 for equipment and consumables!")
        });

        it("if discount is true,  and equipment and consumables is valid", () =>{
          /*helmet, which costs $200
            jacked, which costs $300
            engine oil, which costs $70
            oil filter, which costs $30
          */
        
        assert.equal(motorcycleRider.otherSpendings(['helmet'],['engine oil'], true), "You spend $243.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['jacked'],['engine oil'], true),  "You spend $333.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['jacked'],['oil filter'],true),  "You spend $297.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['helmet'],['oil filter'],true),  "You spend $207.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['engine oil'],true),  "You spend $513.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['oil filter'],true),  "You spend $477.00 for equipment and consumables with 10% discount!")
        assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'],['engine oil', 'oil filter'], true),  "You spend $540.00 for equipment and consumables with 10% discount!")
      });
       
     });
});