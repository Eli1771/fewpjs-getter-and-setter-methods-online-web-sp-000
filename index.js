// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(d) {
    this.radius = d / 2;
  }
  
  get circumference() {
    return this.diameter * Math.PI;
  }
  
  set circumference(c) {
    this.radius = (c / Math.PI) / 2;
  }
  
  get area() {
    return Math.pow((this.radius), 2) * Math.PI;
  }
  
  set area(a) {
    this.radius = Math.sqrt(a / Math.PI);
  }
}