function roadRadar(speed, area) {

    let maxSpeed = 0;
   
    switch (area) {
        case 'city': maxSpeed = 50;
            break;
        case 'residential': maxSpeed = 20;
            break;
        case 'interstate': maxSpeed = 90;
            break;
        case 'motorway': maxSpeed = 130;
            break;
    }

    let differentSpeed = speed - maxSpeed;
 

    if (speed <= maxSpeed) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    } else {
        console.log(`The speed is ${differentSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status(differentSpeed)}`);
    }

    function status(differentSpeed) {
        if (differentSpeed <= 20) {
            return 'speeding';
        } else if (differentSpeed <= 40) {
            return 'excessive speeding';
        } else if (differentSpeed > 40) {
            return 'reckless driving';
        }
    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

