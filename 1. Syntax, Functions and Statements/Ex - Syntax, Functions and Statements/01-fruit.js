function fruit(fruit, quality, price) {
    let weight = quality / 1000;
    let neededMoney = price * weight;
    
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);