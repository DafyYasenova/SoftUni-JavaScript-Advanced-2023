function lastKNumbersSequence(lineLength, kEl) {

    let array = [1];
 
    for (let i = 1; i < lineLength; i++) {
        let index = Math.max(array.length - kEl, 0);

        let lastNum = array.slice(index);
        let sumLastNumbers = 0;

        for (let el of lastNum) {
            sumLastNumbers += el;
        }
        array.push(sumLastNumbers);
    }
   return array;
}
lastKNumbersSequence(6, 3); //	[1, 1, 2, 4, 7, 13]
lastKNumbersSequence(8, 2);	//	[1, 1, 2, 3, 5, 8, 13, 21]