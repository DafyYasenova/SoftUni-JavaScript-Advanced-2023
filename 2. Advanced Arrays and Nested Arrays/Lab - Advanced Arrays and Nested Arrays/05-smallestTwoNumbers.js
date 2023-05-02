function smallestTwoNumbers(array){

    let sortedArray = array.sort((a, b)=> a-b);
    console.log(`${sortedArray[0]} ${sortedArray[1]}`);
}
smallestTwoNumbers([30, 15, 50, 5]); // 5 15
smallestTwoNumbers([3, 0, 10, 4, 7, 3]); // 0 3