function cookingByNumbers(number, ...operator) {

   let modifyNumber = Number(number);

   for (let i = 0; i < operator.length; i++) {
      switch (operator[i]) {
         case 'chop': modifyNumber = modifyNumber / 2;
            break;
         case 'dice': modifyNumber = Math.sqrt(modifyNumber);
            break;
         case 'spice': modifyNumber += 1;
            break;
         case 'bake': modifyNumber *= 3;
            break;
         case 'fillet': modifyNumber = (modifyNumber * 0.8).toFixed(1);
            break;
      }
      console.log(modifyNumber);
   }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');