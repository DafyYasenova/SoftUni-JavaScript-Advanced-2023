function evenPositionElement(array) {

    let evenPositionElements = '';
    for (let i = 0; i < array.length; i++) {
        if ([i] % 2 == 0) {
            evenPositionElements += array[i] + " ";
        }
    }
    console.log(evenPositionElements.trimEnd());

    //2 way:
    // let evenPositionElements = '';
    // for (let i = 0; i < array.length; i+=2) {
    //      evenPositionElements += array[i] + " ";
       
    // }
    
}
evenPositionElement(['20', '30', '40', '50', '60']) // 20 40 60
evenPositionElement(['5', '10']) // 5