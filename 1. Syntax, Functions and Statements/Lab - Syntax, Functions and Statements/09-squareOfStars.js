function squareOfStars(num) {

    if (num == undefined) {
        num = 5;
    }
    for (let row = 0; row < num; row++) {
        let result = '';
        for (let coll = 0; coll < num; coll++) {
            result += '*' + ' ';
        }
        console.log(result.trimEnd());
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars();
squareOfStars(7);