function calorieObject(array) {

    let caloriesObj = {};

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let calorie = Number(array[i + 1]);
        caloriesObj[food] = calorie;
    }
    console.log(caloriesObj);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// { Yoghurt: 48, Rise: 138, Apple: 52 }
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }