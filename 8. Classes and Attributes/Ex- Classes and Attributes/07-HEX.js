class Hex {
    constructor(value) {
        this.value = value;
    };

    valueOf() {
        return this.value;
    };

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    };

    plus(param) {
        if (typeof param === 'object') {
            let result = this.value + param.value;
            return new Hex(result);
        } else {
            let result = this.value + param;
            return new Hex(result);
        }
    };

    minus(param) {
        if (typeof param === 'object') {
            let result = this.value - param.value;
            return new Hex(result);
        } else {
            let result = this.value - param;
            return new Hex(result);
        }
    };
    parse(num) {
        return parseInt(num, 16)

    };
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
/*
0XFF
0XF
true
2730
*/