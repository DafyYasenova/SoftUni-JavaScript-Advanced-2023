function listProcessor(data) {
// създавам обект от функции, според командата
    let result = {
        add(string) {
            array.push(string);
        },
        remove(string){
            array = array.filter((el) => el !== string);
        },
        print(){
            console.log(array.join(','))
        }
    }

    let array = [];

    data.forEach(line => {
        let [command, value] = line.split(' ');
        result[command](value)
    });
    // за всеки ред от инпута, разделям всяка линия на командата и стойността, която има
    // нашия резълт обект, ще изпълни функциите според командата и стойността
   
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// again,again
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
// pesho,george