function add(number) {

    let result = 0;
    
    function inner(number) {
        result += number;
        return inner;
    }
    inner.toString = () => {
        return result;
    }
    return inner(number)
}


console.log(add(1).toString())// 1
console.log(add(1)(6)(-3).toString()); //4