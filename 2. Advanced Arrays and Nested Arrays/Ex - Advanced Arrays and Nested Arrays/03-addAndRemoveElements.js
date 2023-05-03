function addAndRemoveElements(array) {
    let currentNum = 0;
    let arrayResult = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            arrayResult.push(currentNum + 1);
        } else if (array[i] == 'remove') {
            arrayResult.pop();
        }
        currentNum ++;
    }
    if (arrayResult.length > 0) {
        console.log(arrayResult.join('\n'))
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveElements(['remove', 'remove', 'remove'])