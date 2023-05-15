function createSortedList() {

    let listObject= {
        numbers: [],
        size: 0,

        add(num) {
            this.numbers.push(num);
            this.size++;
            return this.numbers.sort((a, b) => a - b);
        },

        remove(index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1)
                this.size--;
            }
            return this.numbers.sort((a, b) => a - b);
        },

        get(index) {
            if (index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            };
        },
    }
    return listObject;
}
    let list = createSortedList();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1));
    list.remove(1);
    console.log(list.get(1));
