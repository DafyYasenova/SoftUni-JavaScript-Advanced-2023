function tickets(data, sortCriteria) {

    let outputArray = [];
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    data.map((line) => {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        outputArray.push(new Ticket(destination, price, status));

    });

    return outputArray.sort((a, b) => {
        if (typeof a[sortCriteria] === 'number') {
            return a[sortCriteria] - b[sortCriteria];
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    });
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
/* [ Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]
*/
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));
/* [ Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' },
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' } ]
*/