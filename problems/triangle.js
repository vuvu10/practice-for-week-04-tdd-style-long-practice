// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        return (
            this.side1 + this.side2 > this.side3 &&
            this.side2 + this.side3 > this.side1 &&
            this.side3 + this.side1 > this.side2
        );
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
        return this.isValid;
    }

    static getValidTriangles(...triangles) {
        return triangles.filter(triangle => triangle.hasValidSideLengths());
    }
}

module.exports = Triangle;