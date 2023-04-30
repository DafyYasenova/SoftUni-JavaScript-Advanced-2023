function stringLength(stringOne, stringTwo, stringThree) {

    let stringOneSum = stringOne.length;
    let stringTwoSum = stringTwo.length;
    let stringThreeSum = stringThree.length;

    let sumLength = stringOneSum + stringTwoSum + stringThreeSum;
    let averageLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');