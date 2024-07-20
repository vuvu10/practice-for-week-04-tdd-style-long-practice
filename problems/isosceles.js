const Triangle = require('./triangle');

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
    }

    validate() {
        super.validate();
        if (this.isValid) {
            this.isValid = this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3;
        }
        return this.isValid;
    }
}

module.exports = Isosceles;