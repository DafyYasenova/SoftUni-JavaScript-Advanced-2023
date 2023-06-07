function getPerson() {
    class Person {
        constructor(fName, lName, age, email) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;

        }
    }
    let persons = [];

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    persons.push(person1);

    let person2 = new Person('SoftUni');
    persons.push(person2);

    let person3 = new Person('Stephan', 'Johnson', 25);
    persons.push(person3);

    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    persons.push(person4);

    return persons;

}