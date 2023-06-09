function juiceFlavors(data) {

    let objectJuices = {};
    let objectBottles = {};

    data.map((line) => {
        let [juice, quantity] = line.split(' =>');
        if (!objectJuices.hasOwnProperty(juice)) {
            objectJuices[juice] = 0;
        }
        objectJuices[juice] += Number(quantity);

        if (objectJuices[juice] >= 1000) {
            let bottles = Math.floor(objectJuices[juice] / 1000);
            if (!objectBottles.hasOwnProperty(juice)) {
                objectBottles[juice] = 0;
            }
            objectBottles[juice] += bottles;
            objectJuices[juice] -= bottles * 1000;
        }
    });

    for (let juice in objectBottles) {
        console.log(`${juice} => ${objectBottles[juice]}`);
    }
  
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
/* Orange => 2
Peach => 2
*/
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
/* Pear => 8
Watermelon => 10
Kiwi => 4
*/