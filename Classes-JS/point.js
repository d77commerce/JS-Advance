class Point {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  static distance(point1, point2) {
    return Math.hypot(point2.a - point1.a, point2.b - point1.b);
  }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
