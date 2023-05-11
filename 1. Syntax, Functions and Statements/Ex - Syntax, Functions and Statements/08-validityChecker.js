function validityChecker(x1, y1, x2, y2){

    let result = (x1, y1, x2, y2) =>{

    let distance = Math.sqrt((x2-x1)**2 + (y2 - y1)**2);
    let output = "";

    if (Number.isInteger(distance)) {
        output = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
        output = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`; 
    }

    console.log(output);
    };
    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);
}

//2 way:
function validityChecker(x1, y1, x2, y2) {

    let result = (x1, y1, x2, y2) => {

        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        let status = Number.isInteger(distance) ? 'valid': 'invalid';
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    };

    console.log(result(x1, y1, 0, 0));
    console.log(result(x2, y2, 0, 0));
    console.log(result(x1, y1, x2, y2));
}

validityChecker(3, 0, 0, 4);
/* 
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
*/
validityChecker(2, 1, 1, 1);
/* 
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
*/
