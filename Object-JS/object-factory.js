function factory(library, orders) {
  let arr = [];
  for (let i = 0; i < orders.length; i++) {
    let temporalyObj = {};
    Object.assign(temporalyObj, orders[i].template);

    for (const j of orders[i].parts) {
      temporalyObj[j] = library[j];
    }
    // console.log(temporalyObj);
    arr.push(temporalyObj);
  }
  // console.log(...arr);
  return arr;
}
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);
console.log(products);
