function ticketInput(tickets, sort) {
  class Tiket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  tickets.map(el => {
    let [destination, price, status] = el.split('|');
    price = Number(price);
    console.log(el);
    result.push(new Tiket(destination, price, status));
  });
  return result.sort((a, b) => {
    if (typeof a[sort] === 'number') {
      return a[sort] - b[sort];
    } else {
      return a[sort].localeCompare(b[sort]);
    }
  });
  //   console.log(result);
  //   console.log(...result);
  //   console.log(result[0]);
  //   const one = result[1];
  //   console.log(one);
}
ticketInput(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
