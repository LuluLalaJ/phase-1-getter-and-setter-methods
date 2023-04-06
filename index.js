// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius*2
    }

    get circumference() {
        return Math.PI*this.diameter 
    }

    get area() {
        return Math.PI*this.radius*this.radius
    }

    set diameter(diameter) {
        this.radius = diameter/2
    }

    set circumference(circumference) {
        this.radius = circumference/Math.PI/2
    }

    set area(area) {
        this.radius = Math.sqrt(area/Math.PI)
    }
}

let circle = new Circle(5)
console.log(circle.area)
console.log(circle.diameter)
console.log(circle.circumference)
console.log("....")
circle.diameter = 20
console.log(circle.radius)
console.log(circle.area)
console.log(circle.diameter)
console.log(circle.circumference)