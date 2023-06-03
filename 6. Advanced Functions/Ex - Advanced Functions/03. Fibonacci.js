function getFibonator() {

    let [a, b] = [0, 1];    // даваме наюална стойност на а = 0 и на  б = 1;

    return () => {          // при всяко извикване на функцията ще се сборуват
        let c = a + b;      
        a = b;              // като първото число ще стане второто
        b = c;              // а второто ще стане сбора от предходните 2
        return a;           
    }

}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
