function cars(input) {

    // създавам обект от функции, според командата
    let result = {
        create(name, inherits, parentName) {
            (data[name] = inherits ? Object.create(data[parentName]) : {})
        },

        set(name, key, value) {
            data[name][key] = value;
        },
        
        print(name) {
            let arr = [];
            for (let key in data[name]) {
                arr.push(`${key}:${data[name][key]}`)
            }
            console.log(arr.join(','))
        }
    }

    let data = {};

    input.forEach(line => {
        let [command, name, key, value] = line.split(' ');
        result[command](name, key, value);
    });
    // за всеки ред от инпута, разделям всяка линия на команда, име, ключ, стойност
    // нашия резълт обект, ще изпълни функциите според командата и параметрите

}


cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
/* color:red
model:new,color:red
*/