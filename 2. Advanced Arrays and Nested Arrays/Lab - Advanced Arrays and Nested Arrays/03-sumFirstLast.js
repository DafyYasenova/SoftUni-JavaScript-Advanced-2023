function sumFirstLast(array) {

    let arrayNum = array.map(Number);
    let fisrtEl = arrayNum.shift();
    let lastEl = arrayNum.pop();
    let result = fisrtEl + lastEl;
    
    console.log(result);
}
sumFirstLast(['20', '30', '40']) //60
sumFirstLast(['5', '10']) //15