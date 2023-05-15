function addAndRemoveElements(array) {
    let currentNum = 1;
    let arrayResult = [];
    
   array.forEach((command) => {
        if (command == 'add') {
            arrayResult.push(currentNum);
        } else {
            arrayResult.pop();
        }
        currentNum ++;
    });

    let result = arrayResult.length > 0 ? arrayResult.join('\n') :'Empty';
    console.log(result);
}
addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveElements(['remove', 'remove', 'remove'])