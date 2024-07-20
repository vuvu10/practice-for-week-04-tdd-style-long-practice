const Triangle = require('./triangle');

class Right extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
    }

    validate() {
        super.validate();
        if (this.isValid) {
            const sides = [this.side1, this.side2, this.side3].sort((a, b) => a - b);
            this.isValid = Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2);
        }
        return this.isValid;
    }
}

module.exports = Right;