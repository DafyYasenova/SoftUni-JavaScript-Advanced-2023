function sortAnArrayBy2Criteria(array) {

    let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (let el of sortedArray) {
        console.log(el);
    }

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);