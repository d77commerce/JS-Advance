class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(r) {
    this.radius = r / 2;
    return this.radius;
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
//c.diameter = 1.6;
//console.log(`Radius: ${c.radius}`);
//console.log(`Diameter: ${c.diameter}`);
//console.log(`Area: ${c.area}`);
