function carFactory(object) {

    let carFactoryObj = {
        model: null,
        engine: {
            power: null,
            volume: null,
        },
        carriage: {
            type: null,
            color: null,
        },
        wheels: [],
    };

    carFactoryObj.model = object.model;

    if (object.power <= 90) {
        carFactoryObj.engine.power = 90;
        carFactoryObj.engine.volume = 1800;

    } else if (object.power <= 120) {
        carFactoryObj.engine.power = 120;
        carFactoryObj.engine.volume = 2400;

    } else if (object.power <= 200) {
        carFactoryObj.engine.power = 200;
        carFactoryObj.engine.volume = 3500;
    }

    carFactoryObj.carriage.type = object.carriage;
    carFactoryObj.carriage.color = object.color;

    for (let i = 0; i < 4; i++) {
        if (object.wheelsize % 2 == 0) {
            carFactoryObj.wheels.push(object.wheelsize - 1);
        } else {
            carFactoryObj.wheels.push(object.wheelsize);
        }
    }
    return carFactoryObj;
  
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
/* { model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }
*/