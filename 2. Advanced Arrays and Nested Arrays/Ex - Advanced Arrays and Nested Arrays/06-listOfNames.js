function listOfNames(array){

    let sortedArray = array.sort((a,b) => a.localeCompare(b));
    
    for(let i = 0; i < array.length; i++){
        console.log(`${i +1}.${array[i]}`);
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"]);
/* 1.Bob
2.Christina
3.Ema
4.John
*/